"""
Collaborate Help Assistant – Flask Backend
==========================================
Run:  python ai.py
Port: 5000
"""

import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
from groq import Groq

# ── Load environment variables ───────────────────────────────
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    raise RuntimeError(
        "GROQ_API_KEY not found. Please add it to HelpmeBot/.env"
    )

# ── Init Flask ───────────────────────────────────────────────
app = Flask(__name__)
CORS(app)  # Allow frontend (file://) to call the API

# ── Init Groq client ─────────────────────────────────────────
client = Groq(api_key=GROQ_API_KEY)

# ── System prompt ─────────────────────────────────────────────
SYSTEM_PROMPT = """You are Collaborate Help Assistant.

Your job is to help employees understand and navigate the Collaborate onboarding portal.

The portal contains:
- onboarding walkthrough
- onboarding guidance
- tax guidance section
- help/support system
- form assistance
- employee onboarding tutorials

Your responsibilities:
- answer onboarding questions
- guide users professionally
- keep responses concise
- be beginner friendly
- focus only on onboarding/help-related questions
- If a user asks for HR contact, phone number, email, or expresses that they are not finding what they need (disturbance), tell them to mail: babu@collaboratesolutions.com. 
- Mention that this is the HR's mail and they should contact them for further assistance.

Rules:
- keep answers short and clear
- avoid unnecessary explanations
- respond professionally
- focus only on company onboarding assistance."""

# ── Keywords for Intelligent Routing ─────────────────────────
HR_DIRECT_KEYWORDS = [
    "hr number", "hr mail", "hr contact", "contact hr", "talk to hr", 
    "hr email", "human resources number", "babu's email"
]

ISSUE_KEYWORDS = [
    "issue", "not getting", "not finding", "no help", "stuck", 
    "problem", "disturbance", "wrong", "error", "help needed"
]

ONBOARDING_KEYWORDS = [
    "onboarding", "tutorial", "guide", "walkthrough", "how to start",
    "portal help", "navigation", "steps", "getting started"
]

VIDEO_PATH = "HelpmeBot/videos/tutorial_video.mp4"

def contains_keywords(message: str, keywords: list) -> bool:
    text = message.lower()
    return any(kw in text for kw in keywords)

# ── Routes ───────────────────────────────────────────────────
@app.route("/", methods=["GET"])
def health():
    return jsonify({"status": "Collaborate Help Assistant is running ✅"})

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(silent=True)
    if not data or "message" not in data:
        return jsonify({"error": "Missing 'message' field in request body."}), 400

    user_message = str(data["message"]).strip()
    if not user_message:
        return jsonify({"error": "Message cannot be empty."}), 400

    # 1. Direct HR Contact Request
    if contains_keywords(user_message, HR_DIRECT_KEYWORDS):
        return jsonify({
            "response": "Please mail to babu@collaboratesolutions.com. This is the HR's mail, please contact them for direct assistance."
        })

    # 2. Onboarding Issue Detection (Give Video + HR Backup)
    if contains_keywords(user_message, ONBOARDING_KEYWORDS) and contains_keywords(user_message, ISSUE_KEYWORDS):
        return jsonify({
            "response": "I'm sorry you're having trouble. Please watch this onboarding tutorial video first to resolve common issues. \n\nIf you are still facing problems after watching, please mail to babu@collaboratesolutions.com for HR support.",
            "video": VIDEO_PATH
        })
    
    # 3. Simple Onboarding Guide Request (Just Video)
    if contains_keywords(user_message, ONBOARDING_KEYWORDS):
        return jsonify({
            "response": "Here is the onboarding tutorial video to help you get started with the portal.",
            "video": VIDEO_PATH
        })

    # 4. General Questions (Use AI Llama 3)
    try:
        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user",   "content": user_message},
            ],
            temperature=0.6,
            max_tokens=512,
        )
        ai_response = completion.choices[0].message.content.strip()
        return jsonify({"response": ai_response})
    except Exception as e:
        print(f"[ERROR] Groq API call failed: {e}")
        return jsonify({"error": "I encountered an error answering your question. Please try again or contact HR."}), 500


# ── Serve video file ─────────────────────────────────────────
@app.route("/HelpmeBot/videos/<path:filename>", methods=["GET"])
def serve_video(filename):
    """Serve video files from the videos directory."""
    video_dir = os.path.join(os.path.dirname(__file__), "videos")
    return send_from_directory(video_dir, filename)


# ── Run ───────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 55)
    print("  Collaborate Help Assistant – Backend")
    print("  Running at: http://localhost:5000")
    print("=" * 55)
    app.run(debug=True, port=5000)
