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

# ── Onboarding and HR keywords for detection ───────────────────
ONBOARDING_KEYWORDS = [
    "onboarding", "tutorial", "document upload", "upload document",
    "profile setup", "set up profile", "form submission", "submit form",
    "onboarding process", "how to start", "getting started",
    "first day", "new employee", "registration", "sign up",
    "account setup", "walkthrough", "guide me", "show me how",
    "step by step", "steps", "help me start", "how do i",
]

HR_KEYWORDS = [
    "hr", "human resources", "hr number", "hr mail", "hr contact",
    "contact hr", "talk to hr", "disturbance", "not getting", 
    "not finding", "no help", "stuck", "problem", "issue", "assistance"
]

VIDEO_PATH = "HelpmeBot/videos/tutorial_video.mp4"


def is_onboarding_query(message: str) -> bool:
    """Return True if the message contains any onboarding keyword."""
    text = message.lower()
    return any(kw in text for kw in ONBOARDING_KEYWORDS)


def is_hr_query(message: str) -> bool:
    """Return True if the message contains any HR or disturbance keyword."""
    text = message.lower()
    return any(kw in text for kw in HR_KEYWORDS)


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

    # Quick check for HR/Disturbance queries
    if is_hr_query(user_message):
        return jsonify({
            "response": "If you are experiencing any issues or need direct assistance from Human Resources, please mail to babu@collaboratesolutions.com. This is the HR's mail, please contact them for further help."
        })

    # Call Groq Llama 3
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
    except Exception as e:
        print(f"[ERROR] Groq API call failed: {e}")
        return jsonify({"error": f"Groq API error: {str(e)}"}), 500

    # Build response
    response_payload = {"response": ai_response}

    # Attach video if onboarding-related
    if is_onboarding_query(user_message):
        response_payload["video"] = VIDEO_PATH

    return jsonify(response_payload)


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
