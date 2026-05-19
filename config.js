// ============================================================
//  INTEGRATED PORTAL CONFIG
//  All data lives here – no hardcoded content in HTML/JS
// ============================================================

// ── PORTAL META ─────────────────────────────────────────────
const PORTAL_CONFIG = {
  title: "Collaborate",
  subtitle: "Employee Onboarding Portal",
  tagline: "Your complete guide to getting started",
  logo: "CO",
  primaryColor: "#2563eb"
};

// ── TUTORIAL SLIDES ──────────────────────────────────────────
// Replace the src values with real screenshot paths when available.
// Placeholder colourful gradient images are used for demo.
const TUTORIAL_SLIDES = [
  {
    id: 1,
    title: "Welcome to Collaborate",
    description: "Your all-in-one HR & productivity platform. This short tutorial will help you get started in minutes.",
    badge: "Step 1 of 8",
    image: "image1.png",
    icon: "👋",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#667eea",
    tip: "Pro tip: Bookmark this portal for quick access during your first week."
  },
  {
    id: 2,
    title: "Set Up Your Profile",
    description: "Complete your employee profile with your personal information, photo, and emergency contacts to get fully onboarded.",
    badge: "Step 2 of 8",
    image: "image2.png",
    icon: "👤",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    accentColor: "#11998e",
    tip: "A complete profile helps your team find and connect with you faster."
  },
  {
    id: 3,
    title: "Explore Your Dashboard",
    description: "Your personal dashboard shows attendance, payslips, leave balance, announcements, and quick-action shortcuts.",
    badge: "Step 3 of 8",
    image: "image3.png",
    icon: "📊",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "#f5576c",
    tip: "Pin your most-used modules to the top for faster navigation."
  },
  {
    id: 4,
    title: "Submit Your Documents",
    description: "Upload required onboarding documents including ID proofs, address verification, education certificates, and tax declarations.",
    badge: "Step 4 of 8",
    image: "image4.png",
    icon: "📁",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accentColor: "#4facfe",
    tip: "Ensure all documents are clear, under 5 MB, and in PDF or JPG format."
  },
  {
    id: 5,
    title: "Configure Your Tax Savings",
    description: "Declare your tax-saving investments under sections 80C, 80D, and more through the Tax Declaration module.",
    badge: "Step 5 of 8",
    image: "image5.png",
    icon: "💰",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    accentColor: "#fa709a",
    tip: "Use the Tax Help section in this portal to understand each deduction before you declare."
  },
  {
    id: 6,
    title: "Connect with Your Team",
    description: "Explore the company directory, join your team channel, and schedule your orientation meeting with your manager.",
    badge: "Step 6 of 8",
    image: "image6.png",
    icon: "🤝",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    accentColor: "#30cfd0",
    tip: "Introduce yourself in the #new-joiners Slack channel – everyone loves a hello!"
  },
  {
    id: 7,
    title: "Complete Compliance Training",
    description: "Finish mandatory e-learning modules on code of conduct, data privacy, workplace safety, and anti-harassment policies.",
    badge: "Step 7 of 8",
    image: "image7.png",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    accentColor: "#a18cd1",
    tip: "Most modules take 10–15 minutes each. Complete them within your first 30 days."
  },
  {
    id: 8,
    title: "You Are All Set! 🎉",
    description: "Congratulations! You have completed the onboarding checklist. Explore the HR portal anytime for payslips, leave, and benefits.",
    badge: "Step 8 of 9",
    image: "image8.png",
    icon: "🏆",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    accentColor: "#fda085",
    tip: "Remember: your HR Business Partner is always available to help with any queries."
  },
  {
    id: 9,
    title: "Final Check",
    description: "You have completed all steps.",
    badge: "Step 9 of 9",
    image: "image9.png",
    icon: "✅",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    accentColor: "#fda085",
    tip: "Enjoy your time at Collaborate!"
  }
];

// ── TAX SECTIONS ─────────────────────────────────────────────
const TAX_SECTIONS = [
  {
    id: "80C",
    icon: "💼",
    title: "Section 80C: Savings & Investments",
    intro: "Section 80C is the most widely used tax-saving section. It rewards employees for investing in approved savings instruments and paying certain expenses.",
    overview: "This section allows tax deduction on investments and expenses made during the financial year. It encourages saving for the future while lowering taxable income.",
    maxDeduction: "Up to ₹1,50,000 per financial year.",
    whoCanClaim: "Any salaried individual or HUF with eligible investments or payments made in the financial year.",
    eligibleItems: [
      "Employee Provident Fund (EPF)",
      "Public Provident Fund (PPF)",
      "Life insurance premiums",
      "Equity Linked Savings Scheme (ELSS)",
      "Principal repayment of home loan",
      "Children's tuition fees",
      "National Savings Certificate (NSC)",
      "Sukanya Samriddhi Yojana",
      "5-Year Tax Saving Fixed Deposit"
    ],
    eligibility: [
      "You must be an individual taxpayer or a Hindu Undivided Family (HUF).",
      "The expense or investment must be made during the financial year.",
      "The investment should qualify under Section 80C rules."
    ],
    example: "If you invest ₹1,00,000 in PPF and pay ₹30,000 as life insurance premium, you can claim ₹1,30,000 deduction under Section 80C.",
    notes: [
      "The total deduction across all eligible 80C instruments cannot exceed ₹1,50,000.",
      "Some items like ELSS have a lock-in period of 3 years.",
      "The 80C limit is shared with 80CCC and 80CCD(1)."
    ],
    benefits: [
      "Reduces taxable income directly.",
      "Promotes disciplined savings and investment.",
      "Helps employees build long-term financial security."
    ],
    documents: [
      "Insurance premium receipts",
      "PPF passbook entry / statement",
      "ELSS investment statements",
      "Home loan principal repayment certificate",
      "Tuition fee receipts"
    ],
    beginnerExplanation: "Think of 80C as a reward for putting money into savings and insurance. The government lets you lower your tax bill when you invest in approved plans or pay certain expenses. Invest ₹1.5 lakh and save thousands in tax!"
  },
  {
    id: "80CCC",
    icon: "📈",
    title: "Section 80CCC: Pension Contributions",
    intro: "Section 80CCC offers tax relief for contributions to certain pension plans. It is ideal for employees planning post-retirement savings.",
    overview: "This section applies to contributions made into qualifying pension funds. The goal is to encourage individuals to save for retirement with tax benefits.",
    maxDeduction: "Included in the overall 80C cap of ₹1,50,000.",
    whoCanClaim: "Individuals who contribute to eligible pension fund schemes during the year.",
    eligibleItems: [
      "Pension plan premium payments",
      "Approved annuity plans",
      "Insurance company pension policies"
    ],
    eligibility: [
      "You must be an individual taxpayer.",
      "The pension policy should be approved by the tax department.",
      "Premiums must be paid during the financial year."
    ],
    example: "If you pay ₹60,000 toward an approved pension policy, that amount contributes toward your Section 80C limit and reduces your taxable income.",
    notes: [
      "Contributions under 80CCC are part of the 80C total limit.",
      "Pension amount may be taxed when received later.",
      "This benefit is for retirement-focused savings only."
    ],
    benefits: [
      "Supports long-term retirement planning.",
      "Reduces tax today while saving for the future.",
      "Easy to claim with eligible premiums."
    ],
    documents: [
      "Policy premium receipts",
      "Pension plan statement",
      "Insurance company certificates"
    ],
    beginnerExplanation: "If you pay into a pension policy, 80CCC lets you count that payment as a tax-saving expense. It helps you save now and build retirement income for later."
  },
  {
    id: "80CCD",
    icon: "🧾",
    title: "Section 80CCD: National Pension Scheme (NPS)",
    intro: "Section 80CCD supports saving in the National Pension System (NPS). It offers extra tax incentives beyond the standard 80C limit.",
    overview: "This section provides deductions for contributions to NPS accounts, including a special additional deduction of ₹50,000 under 80CCD(1B).",
    maxDeduction: "Up to ₹1,50,000 under 80CCD(1) + additional ₹50,000 under 80CCD(1B) = total ₹2,00,000 possible.",
    whoCanClaim: "Individuals contributing to NPS on their own or through employer contributions.",
    eligibleItems: [
      "Self contributions to NPS",
      "Employer contributions to NPS (up to 10% of salary)",
      "Voluntary contributions to NPS accounts"
    ],
    eligibility: [
      "You must have an active NPS account (PRAN).",
      "Contributions must be made during the financial year.",
      "Employer contribution has a separate deduction limit."
    ],
    example: "If you contribute ₹40,000 to NPS under 80CCD(1) and an additional ₹50,000 under 80CCD(1B), you save tax on ₹90,000 in addition to your 80C benefits.",
    notes: [
      "80CCD(1B) gives ₹50,000 over and above the 80C limit.",
      "Employer contributions are taxed differently at maturity.",
      "NPS withdrawals have specific rules after retirement."
    ],
    benefits: [
      "Gives extra tax savings beyond 80C.",
      "Encourages retirement-specific investment.",
      "Works well with employer pension contributions."
    ],
    documents: [
      "NPS contribution certificate",
      "PRAN account statement"
    ],
    beginnerExplanation: "80CCD helps you save tax when you put money into the government-backed NPS. It is a smart way to grow your retirement savings while reducing taxes today."
  },
  {
    id: "80TTA",
    icon: "🏦",
    title: "Section 80TTA: Savings Account Interest",
    intro: "Section 80TTA gives a tax break on interest earned from savings accounts. Useful for salaried employees with bank deposits.",
    overview: "This section allows deduction of interest earned on savings bank accounts from taxable income, making small savings more rewarding.",
    maxDeduction: "Up to ₹10,000 per year.",
    whoCanClaim: "Individual taxpayers and Hindu Undivided Families (HUFs) with savings account interest.",
    eligibleItems: [
      "Interest from savings bank accounts",
      "Interest from post office savings accounts",
      "Interest from cooperative society savings accounts"
    ],
    eligibility: [
      "Interest must be from a savings bank account.",
      "Deduction applies only to savings interest, not fixed deposits.",
      "You must file income tax return as an individual or HUF."
    ],
    example: "If your savings account earns ₹8,500 in interest, you can deduct the full ₹8,500 under Section 80TTA.",
    notes: [
      "Only interest from savings accounts qualifies.",
      "No deduction for fixed deposit or recurring deposit interest.",
      "The limit is ₹10,000 per financial year."
    ],
    benefits: [
      "Reduces taxable income from regular savings.",
      "Easy to claim with bank interest certificate.",
      "Helps salaried employees keep more of their savings."
    ],
    documents: [
      "Bank interest certificate",
      "Account statement showing interest earned"
    ],
    beginnerExplanation: "80TTA means the interest you earn from your savings account can be deducted from your tax bill. It is a simple, automatic saving for everyone with a savings account."
  },
  {
    id: "80CCG",
    icon: "🎯",
    title: "Section 80CCG: Rajiv Gandhi Equity Savings",
    intro: "Section 80CCG was designed to encourage investment in equity markets for first-time investors. Important for historic claims.",
    overview: "This section offered deductions for investing in approved equity savings schemes. Though withdrawn for new investors, it may still apply for older investments.",
    maxDeduction: "Up to 50% of investment, capped at ₹25,000.",
    whoCanClaim: "Resident individuals who invested under the specified RGESS scheme.",
    eligibleItems: [
      "Investment in Rajiv Gandhi Equity Savings Scheme products",
      "Purchases of approved small-cap equity shares"
    ],
    eligibility: [
      "Must be a resident individual aged 18 to 60 years.",
      "Annual income should be within the specified limit.",
      "Investments must be held for the required lock-in period."
    ],
    example: "If you invested ₹40,000 in RGESS, you could claim up to ₹20,000 as deduction under the scheme rules.",
    notes: [
      "Scheme has been withdrawn for new investors after 2017.",
      "Only existing qualified investments may still be claimed.",
      "Check current applicability with your tax advisor."
    ],
    benefits: [
      "Encouraged equity investment for new savers.",
      "Offered a partial tax break on small-cap holdings.",
      "Made stock market investment more accessible."
    ],
    documents: [
      "Investment certificate from broker",
      "Account statement for RGESS holdings"
    ],
    beginnerExplanation: "80CCG was a tax benefit for a special equity savings scheme. It helped people reduce tax when they invested in certain stock market products for the first time."
  },
  {
    id: "80CCF",
    icon: "🏘️",
    title: "Section 80CCF: Infrastructure Bonds",
    intro: "Section 80CCF supported investment in long-term infrastructure bonds as an additional deduction beyond 80C.",
    overview: "This section offered deduction for subscribing to notified infrastructure bonds, channeling savings into national infrastructure projects.",
    maxDeduction: "Up to ₹20,000 (additional to 80C limit).",
    whoCanClaim: "Individuals who invested in qualifying infrastructure bonds during the allowed period.",
    eligibleItems: [
      "Investment in notified infrastructure bonds",
      "Bonds issued by certain public sector entities"
    ],
    eligibility: [
      "You must be an individual taxpayer.",
      "The bond must be notified under Section 80CCF.",
      "Investment must be made in the specified financial year."
    ],
    example: "If you invested ₹20,000 in an eligible infrastructure bond, that full amount could be claimed as an additional deduction on top of your 80C limit.",
    notes: [
      "This was a one-time allowance and is no longer available for new investments.",
      "Older bond investments may still qualify if made in the eligible year.",
      "Always verify historic eligibility before claiming."
    ],
    benefits: [
      "Encouraged funding for infrastructure projects.",
      "Provided extra tax savings beyond 80C.",
      "Supported long-term public investments."
    ],
    documents: [
      "Bond subscription certificate",
      "Investment statement from issuer"
    ],
    beginnerExplanation: "80CCF let taxpayers get extra tax deductions by buying certain infrastructure bonds. It was an additional benefit over and above regular investment deductions."
  },
  {
    id: "80D",
    icon: "🩺",
    title: "Section 80D: Health Insurance Premiums",
    intro: "Section 80D gives significant tax relief for health insurance and medical expenses – vital for every employee.",
    overview: "This section allows deduction for premium payments made toward health insurance and certain medical expenses for self, family, and parents.",
    maxDeduction: "₹25,000 for self & family + ₹25,000 for parents (₹50,000 if parents are senior citizens). Maximum ₹75,000 if both apply with senior citizen parents.",
    whoCanClaim: "Individuals who pay health insurance premiums or qualifying medical expenses.",
    eligibleItems: [
      "Health insurance premium for self and family",
      "Health insurance premium for parents",
      "Medical expenditure for senior citizen parents",
      "Preventive health check-up expenses (up to ₹5,000)"
    ],
    eligibility: [
      "Premiums must be paid during the financial year.",
      "Insurance must be with a recognized insurer.",
      "For parents, the deduction varies by age and senior citizen status."
    ],
    example: "If you pay ₹18,000 for your family health insurance and ₹22,000 for your parents, you can claim ₹40,000 under Section 80D.",
    notes: [
      "Preventive health check-up costs included up to ₹5,000 within the limit.",
      "If parents are senior citizens, the parent deduction limit is ₹50,000.",
      "Separate limits apply for self/family and parents."
    ],
    benefits: [
      "Rewards you for protecting your family's health.",
      "Reduces tax while improving financial security.",
      "Incentivizes comprehensive health insurance coverage."
    ],
    documents: [
      "Premium payment receipts",
      "Insurance policy certificate",
      "Medical bills for qualifying expenses"
    ],
    beginnerExplanation: "80D lets you save tax by buying health insurance. The more coverage you have for yourself, spouse, children, and parents, the more tax you can save. It is a win-win for your health and wallet!"
  },
  {
    id: "80E",
    icon: "🎓",
    title: "Section 80E: Education Loan Interest",
    intro: "Section 80E provides tax relief on interest paid for education loans – great for employees still repaying student loans.",
    overview: "This section allows deduction of interest paid on education loans for higher studies. The deduction is available for up to 8 years.",
    maxDeduction: "No upper limit – full interest amount is deductible.",
    whoCanClaim: "Individuals repaying interest on an education loan taken for higher education of self, spouse, or children.",
    eligibleItems: [
      "Interest on student loan for higher education",
      "Loan taken for self, spouse, or child",
      "Loan taken for technical or professional courses in India or abroad"
    ],
    eligibility: [
      "The loan must be from a recognized financial institution or approved charitable institution.",
      "Education should be for higher studies (after 12th standard).",
      "Deduction applies only to interest, not the principal amount."
    ],
    example: "If you pay ₹45,000 as interest on an education loan in a year, the full ₹45,000 is deductible under Section 80E with no upper cap.",
    notes: [
      "Deduction is available for a maximum of 8 consecutive years.",
      "Only interest portion qualifies, not the principal repayment.",
      "The course must be for recognized higher education."
    ],
    benefits: [
      "Lowers tax for borrowers repaying student loan interest.",
      "Encourages higher education by reducing repayment burden.",
      "Available for studies in India and abroad."
    ],
    documents: [
      "Loan interest certificate from the lender",
      "Education loan agreement",
      "Fee receipts for the course"
    ],
    beginnerExplanation: "80E helps you reduce tax when you pay interest on a student loan. There is no maximum limit, making it one of the most generous deductions for education loan borrowers."
  },
  {
    id: "80EE",
    icon: "🏠",
    title: "Section 80EE: Home Loan (First-Time Buyers)",
    intro: "Section 80EE is for first-time home buyers paying interest on a home loan. It makes homeownership more affordable.",
    overview: "This section provides an additional deduction for interest paid on home loans taken for buying or constructing a first home.",
    maxDeduction: "Up to ₹50,000 per year (in addition to Section 24 deduction).",
    whoCanClaim: "First-time home buyers who have taken a loan from a financial institution or housing finance company.",
    eligibleItems: [
      "Interest on home loan for first residential property",
      "Home loan interest paid to banks or housing finance companies"
    ],
    eligibility: [
      "You must not own more than one residential property when the loan is sanctioned.",
      "Loan amount should not exceed the defined limit.",
      "Property value should be within government-specified limits."
    ],
    example: "If your first home loan interest is ₹48,000 in a year, you can claim ₹48,000 as additional deduction under Section 80EE.",
    notes: [
      "Only first-time homeowners are eligible.",
      "The property must be a residential house or apartment.",
      "This deduction is separate from Section 24 home loan interest deduction."
    ],
    benefits: [
      "Supports first-home ownership.",
      "Reduces tax on home loan interest payments.",
      "Boosts financial planning for new homeowners."
    ],
    documents: [
      "Loan statement showing interest paid",
      "Home loan sanction letter",
      "Property documents and registration certificate"
    ],
    beginnerExplanation: "80EE gives extra tax relief if you are buying your very first home with a loan. Combined with other home loan deductions, it significantly reduces your tax outgo."
  },
  {
    id: "80GGA",
    icon: "🌍",
    title: "Section 80GGA: Scientific Research Donations",
    intro: "Section 80GGA covers donations to approved scientific research and rural development projects – rewarding charitable giving.",
    overview: "This section allows deductions for donations made to organizations working in scientific research, rural development, or social causes.",
    maxDeduction: "100% of donation amount (subject to organization's approval status).",
    whoCanClaim: "Individuals or organizations donating to notified funds, institutions, or research bodies.",
    eligibleItems: [
      "Donations to scientific research institutions",
      "Contributions to rural development programs",
      "Support for approved non-profit research agencies"
    ],
    eligibility: [
      "Donation must be to a notified institution or fund.",
      "Donor must have proof of payment and donation receipt.",
      "Donation should not be for personal or commercial benefit."
    ],
    example: "If you donate ₹10,000 to an approved rural development trust by bank transfer, the full ₹10,000 may be deductible under 80GGA.",
    notes: [
      "Donations should be made by cheque, draft, or online transfer.",
      "Cash donations above ₹2,000 are not allowed for deduction.",
      "Verify the receiving organization's government approval before donating."
    ],
    benefits: [
      "Encourages contributions to research and social projects.",
      "Offers a tax benefit on charitable giving.",
      "Helps employees support meaningful causes."
    ],
    documents: [
      "Donation receipt from the organization",
      "Bank transfer records",
      "Organization's 80GGA approval certificate"
    ],
    beginnerExplanation: "Under 80GGA, you can save tax by donating to approved research or rural development causes. It is a great way to help society while lowering your taxable income."
  },
  {
    id: "80GGB",
    icon: "🌐",
    title: "Section 80GGB: Political Party Donations",
    intro: "Section 80GGB covers donations made to registered political parties in India with full tax deduction.",
    overview: "This section allows deduction for donations to registered political parties or electoral trusts through non-cash modes of payment.",
    maxDeduction: "Full amount of donation (no fixed upper cap), subject to payment method.",
    whoCanClaim: "Individual taxpayers who donate to recognized political parties or electoral trusts.",
    eligibleItems: [
      "Donations to political parties registered under the Representation of People Act",
      "Contributions to electoral trusts"
    ],
    eligibility: [
      "Donation must be by cheque, draft, or electronic transfer.",
      "The political party or trust must be registered under law.",
      "No cash donations are allowed for this deduction."
    ],
    example: "If you donate ₹5,000 to a registered political party by online transfer, you can claim the full ₹5,000 as a deduction.",
    notes: [
      "Only non-cash donations qualify for this deduction.",
      "Verify the party or electoral trust registration first.",
      "Proof of payment is essential for claiming deduction."
    ],
    benefits: [
      "Allows responsible political donations with tax benefit.",
      "Promotes transparency in political funding.",
      "Simple to claim with proper receipts."
    ],
    documents: [
      "Donation receipt from the party or electoral trust",
      "Bank transfer proof or cheque copy"
    ],
    beginnerExplanation: "80GGB lets you claim a deduction when you donate to registered political parties by bank transfer. It makes political giving tax-friendly when done with proper documentation."
  },
  {
    id: "80GG",
    icon: "🏢",
    title: "Section 80GG: House Rent (Without HRA)",
    intro: "Section 80GG helps employees who pay rent but do not receive House Rent Allowance (HRA) from their employer.",
    overview: "This section allows deduction of rent paid for residential accommodation when you do not receive HRA as part of your salary package.",
    maxDeduction: "Least of: ₹5,000/month, 25% of total income, or actual rent minus 10% of total income.",
    whoCanClaim: "Individuals who pay rent and are not claiming HRA from their employer.",
    eligibleItems: [
      "Monthly rent payments for living accommodation",
      "Rent for a personal or family residence"
    ],
    eligibility: [
      "You must not receive HRA as part of salary.",
      "You must not own a residential property in the place of employment or business.",
      "Rent must be paid to a person other than a close relative."
    ],
    example: "If your annual income is ₹6,00,000 and you pay rent of ₹1,20,000/year, you may claim the least of ₹60,000 (25% of income), ₹60,000 (₹5,000×12), or ₹60,000 (rent minus 10% income).",
    notes: [
      "You must submit a rental agreement and rent receipts.",
      "The deduction is only for residential rent, not commercial.",
      "A Form 10BA declaration of non-ownership is required."
    ],
    benefits: [
      "Helps employees living in rented accommodation without HRA.",
      "Offers tax relief for self-employed individuals.",
      "Supports employees during relocation after joining."
    ],
    documents: [
      "Rent receipts (monthly)",
      "Rental agreement or lease deed",
      "Form 10BA – Declaration of non-ownership",
      "Landlord PAN (if annual rent > ₹1 lakh)"
    ],
    beginnerExplanation: "80GG lets you deduct rent paid if your employer does not give HRA. This is especially useful for new joiners who have relocated and are paying rent without any rent allowance from their salary."
  }
];
