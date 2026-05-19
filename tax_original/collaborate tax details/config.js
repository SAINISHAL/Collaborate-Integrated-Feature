const TAX_SECTIONS = [
  {
    id: '80C',
    icon: '💼',
    title: 'Section 80C: Savings and Investments',
    intro: 'Section 80C helps employees save tax on common investments and expenses. It is one of the most used tax benefits in onboarding planning.',
    overview: 'This section allows tax deduction on investments and expenses made during the financial year. It encourages saving for the future while lowering taxable income.',
    maxDeduction: 'Up to ₹1,50,000 per year.',
    whoCanClaim: 'Any salaried individual or HUF with eligible investments or payments in the year.',
    eligibleItems: [
      'Employee Provident Fund (EPF)',
      'Public Provident Fund (PPF)',
      'Life insurance premiums',
      'Equity Linked Savings Scheme (ELSS)',
      'Principal repayment of home loan',
      'Children’s tuition fees',
      'National Savings Certificate (NSC)'
    ],
    eligibility: [
      'You must be an individual taxpayer or a Hindu Undivided Family (HUF).',
      'The expense or investment must be made during the financial year.',
      'The investment should qualify under Section 80C rules.'
    ],
    example: 'If you invest ₹1,00,000 in PPF and pay ₹30,000 in life insurance premium, you can claim ₹1,30,000 deduction under Section 80C.',
    notes: [
      'The total deduction across all eligible 80C instruments cannot exceed ₹1,50,000.',
      'Some items like ELSS have a lock-in period of 3 years.',
      'Separate sections may apply for medical insurance and home loan interest.'
    ],
    benefits: [
      'Reduces taxable income directly.',
      'Promotes disciplined savings and investment.',
      'Helps employees build financial security.'
    ],
    documents: [
      'Insurance premium receipts',
      'PPF passbook entry',
      'ELSS investment statements',
      'Home loan principal repayment certificate',
      'Tuition fee receipts'
    ],
    beginnerExplanation: 'Think of 80C as a reward for putting money into savings and insurance. The government lets you lower your tax bill when you invest in approved plans or pay certain expenses.'
  },
  {
    id: '80CCC',
    icon: '📈',
    title: 'Section 80CCC: Pension Contributions',
    intro: 'Section 80CCC offers tax relief for contributions to certain pension plans. It is ideal for employees planning retirement savings.',
    overview: 'This section applies to contributions made into qualifying pension funds. The goal is to encourage individuals to save for retirement with tax benefits.',
    maxDeduction: 'The limit is included in the overall 80C cap of ₹1,50,000.',
    whoCanClaim: 'Individuals who contribute to eligible pension fund schemes during the year.',
    eligibleItems: [
      'Pension plan premium payments',
      'Approved annuity plans',
      'Insurance company pension policies'
    ],
    eligibility: [
      'You must be an individual taxpayer.',
      'The pension policy should be approved by the tax department.',
      'Premiums must be paid during the financial year.'
    ],
    example: 'If you pay ₹60,000 toward an approved pension policy, that amount contributes toward your Section 80C limit and reduces your taxable income.',
    notes: [
      'Contributions under 80CCC are part of the 80C total limit.',
      'Pension amount may be taxed when received later.',
      'This benefit is for retirement-focused savings only.'
    ],
    benefits: [
      'Supports long-term retirement planning.',
      'Reduces tax today while saving for the future.',
      'Easy to claim with eligible premiums.'
    ],
    documents: [
      'Policy premium receipts',
      'Pension plan statement',
      'Insurance company certificates'
    ],
    beginnerExplanation: 'If you pay into a pension policy, 80CCC lets you count that payment as a tax-saving expense. It helps you save now and build retirement income later.'
  },
  {
    id: '80CCD',
    icon: '🧾',
    title: 'Section 80CCD: National Pension Scheme',
    intro: 'Section 80CCD supports saving in the National Pension System (NPS). It is a focused option for retirement savings with extra tax incentives.',
    overview: 'This section provides deductions for contributions to NPS accounts, including a special additional deduction for employee contributions.',
    maxDeduction: 'Up to ₹1,50,000 under 80CCD(1) and additional ₹50,000 under 80CCD(1B).',
    whoCanClaim: 'Individuals contributing to NPS on their own or through employer contributions.',
    eligibleItems: [
      'Self contributions to NPS',
      'Employer contributions to NPS',
      'Voluntary contributions to NPS accounts'
    ],
    eligibility: [
      'You must have an active NPS account.',
      'Contributions must be made during the financial year.',
      'Employer contribution has a separate deduction limit.'
    ],
    example: 'If you contribute ₹40,000 to NPS, you can claim it under 80CCD(1). If you contribute an additional ₹40,000 under 80CCD(1B), you get more tax savings beyond the 80C limit.',
    notes: [
      '80CCD(1B) is over and above the 80C limit.',
      'Employer contributions are taxed differently at maturity.',
      'NPS withdrawals have specific rules after retirement.'
    ],
    benefits: [
      'Gives extra tax savings beyond 80C.',
      'Encourages retirement-specific investment.',
      'Works well with employer pension contributions.'
    ],
    documents: [
      'NPS contribution certificate',
      'PRAN account statement'
    ],
    beginnerExplanation: '80CCD helps you save tax when you put money into the government pension scheme NPS. It is a simple way to grow your retirement savings and reduce taxes now.'
  },
  {
    id: '80TTA',
    icon: '🏦',
    title: 'Section 80TTA: Savings Interest Income',
    intro: 'Section 80TTA gives a tax break on interest earned from savings accounts. It is useful for salaried employees with bank deposits.',
    overview: 'This section allows deduction of interest earned on savings bank accounts from taxable income, making small savings more rewarding.',
    maxDeduction: 'Up to ₹10,000 per year.',
    whoCanClaim: 'Individual taxpayers and Hindu Undivided Families (HUFs) with savings account interest.',
    eligibleItems: [
      'Interest from savings bank accounts',
      'Interest from savings accounts in banks',
      'Interest from post office savings accounts'
    ],
    eligibility: [
      'Interest must be from a savings bank account.',
      'Deduction only applies to interest income, not fixed deposits.',
      'You must file income tax return as an individual or HUF.'
    ],
    example: 'If your savings account earns ₹8,500 in interest, you can deduct the full ₹8,500 under Section 80TTA.',
    notes: [
      'Only interest from savings accounts qualifies.',
      'No deduction for fixed deposit or recurring deposit interest.',
      'The limit is ₹10,000 per financial year.'
    ],
    benefits: [
      'Reduces taxable income from regular savings.',
      'Easy claim with bank interest details.',
      'Helps salaried employees keep more of their savings.'
    ],
    documents: [
      'Bank interest certificate',
      'Account statement showing interest earned'
    ],
    beginnerExplanation: '80TTA means the interest you earn from your savings account can be deducted from your tax bill. It is a simple way to save tax on everyday bank interest.'
  },
  {
    id: '80CCG',
    icon: '🎯',
    title: 'Section 80CCG: Rajiv Gandhi Equity Savings Scheme',
    intro: 'Section 80CCG was designed to encourage investment in small-cap equities. It provided tax relief for eligible investors.',
    overview: 'This section offered deductions for investing in approved equity savings schemes, although its use has ended and it remains useful for historic claims.',
    maxDeduction: 'Up to 50% of investment, within an overall ₹25,000 cap.',
    whoCanClaim: 'Resident individuals who invested under the specified equity savings scheme.',
    eligibleItems: [
      'Investment in Rajiv Gandhi Equity Savings Scheme (RGESS) products',
      'Purchases of approved small-cap equity shares'
    ],
    eligibility: [
      'You must be a resident individual aged 18 to 60 years.',
      'Annual income should be within the specified limit.',
      'Investments must be held for the required lock-in period.'
    ],
    example: 'If you invested ₹40,000 in RGESS, you could claim up to ₹20,000 as deduction subject to the scheme rules.',
    notes: [
      'Scheme has been withdrawn for new investors after 2017.',
      'Only existing qualified investments may still be claimed.',
      'Check current applicability with your tax advisor.'
    ],
    benefits: [
      'Encouraged equity investment for new savers.',
      'Offered a partial tax break on small-cap holdings.',
      'Made stock market investment more accessible.'
    ],
    documents: [
      'Investment certificate from broker',
      'Account statement for RGESS holdings'
    ],
    beginnerExplanation: '80CCG was a tax benefit for a special equity savings scheme. It helped people reduce tax when they invested in certain stock market products.'
  },
  {
    id: '80CCF',
    icon: '🏘️',
    title: 'Section 80CCF: Infrastructure Bonds',
    intro: 'Section 80CCF supported investment in infrastructure bonds. It was a one-time tax benefit for infrastructure financing.',
    overview: 'This section offered deduction for subscribing to notified infrastructure bonds, helping channel savings into national projects.',
    maxDeduction: 'Up to ₹20,000 in addition to the 80C limit.',
    whoCanClaim: 'Individuals who invested in qualifying infrastructure bonds during the allowed period.',
    eligibleItems: [
      'Investment in notified infrastructure bonds',
      'Bonds issued by certain public sector entities'
    ],
    eligibility: [
      'You must be an individual taxpayer.',
      'The bond must be notified under Section 80CCF.',
      'Investment must be made in the specified financial year.'
    ],
    example: 'If you invested ₹20,000 in an eligible infrastructure bond, that full amount could be claimed as an additional deduction.',
    notes: [
      'This was a one-time allowance and is no longer available for new investments.',
      'Older bond investments may still qualify if they were made in the eligible year.',
      'Always verify historic eligibility before claiming.'
    ],
    benefits: [
      'Encouraged funding for infrastructure projects.',
      'Provided extra tax savings beyond 80C.',
      'Supported long-term public investments.'
    ],
    documents: [
      'Bond subscription certificate',
      'Investment statement from issuer'
    ],
    beginnerExplanation: '80CCF let taxpayers claim a tax deduction when they bought certain infrastructure bonds. It was an extra benefit over the usual investment deductions.'
  },
  {
    id: '80D',
    icon: '🩺',
    title: 'Section 80D: Health Insurance Premiums',
    intro: 'Section 80D gives relief for health insurance and medical expenses. It is especially important for employees protecting themselves and their family.',
    overview: 'This section allows deduction for premium payments made toward health insurance and certain medical expenses for self, family, and parents.',
    maxDeduction: 'Up to ₹25,000 for self and family; extra ₹25,000 for parents (₹50,000 if parents are senior citizens).',
    whoCanClaim: 'Individuals who pay health insurance premiums or qualifying medical expenses.',
    eligibleItems: [
      'Health insurance premium for self and family',
      'Health insurance premium for parents',
      'Medical expenditure for senior citizen parents',
      'Preventive health check-up expenses'
    ],
    eligibility: [
      'Premiums must be paid during the financial year.',
      'Insurance must be with a recognized insurer.',
      'For parents, the deduction varies by age and senior citizen status.'
    ],
    example: 'If you pay ₹18,000 for your family health insurance and ₹22,000 for your parents, you can claim ₹18,000 + ₹22,000 = ₹40,000 under Section 80D.',
    notes: [
      'Preventive health check-up costs are included up to ₹5,000.',
      'If parents are senior citizens, the parent limit becomes ₹50,000.',
      'Separate limits apply for self/family and parents.'
    ],
    benefits: [
      'Rewards you for protecting family health.',
      'Reduces tax while improving financial security.',
      'Incentivizes health insurance coverage.'
    ],
    documents: [
      'Premium payment receipts',
      'Insurance policy certificate',
      'Medical bills for qualifying expenses'
    ],
    beginnerExplanation: '80D lets you save tax for health insurance and medical expenses. The better you protect your family, the more you can save on taxes.'
  },
  {
    id: '80E',
    icon: '🎓',
    title: 'Section 80E: Education Loan Interest',
    intro: 'Section 80E provides tax relief on interest paid for education loans. It supports employees who are repaying student loan interest.',
    overview: 'This section allows deduction of interest paid on education loans for higher studies. The deduction is available for a limited period.',
    maxDeduction: 'No fixed upper limit on interest deduction, but only the interest amount is eligible.',
    whoCanClaim: 'Individuals repaying interest on an education loan taken for higher education of self, spouse, or children.',
    eligibleItems: [
      'Interest on student loan for higher education',
      'Loan taken for self, spouse, or child',
      'Loan taken for technical or professional courses abroad or in India'
    ],
    eligibility: [
      'The loan must be from a recognized financial institution.',
      'Education should be for higher studies in India or abroad.',
      'Deduction applies only to interest, not the principal amount.'
    ],
    example: 'If you pay ₹45,000 interest on an education loan in a year, you can claim ₹45,000 under Section 80E.',
    notes: [
      'Deduction is available for a maximum of 8 years or until the interest is paid, whichever is earlier.',
      'Only interest portion qualifies, not the principal repayment.',
      'The course must be for higher education.'
    ],
    benefits: [
      'Lowers tax for borrowers repaying student loan interest.',
      'Encourages higher education by reducing repayment burden.',
      'Available for studies in India and abroad.'
    ],
    documents: [
      'Loan interest certificate from the lender',
      'Education loan agreement',
      'Fee receipts for the course'
    ],
    beginnerExplanation: '80E helps you reduce tax when you pay interest on a student loan. It makes repaying higher education loans easier by letting you deduct that interest.'
  },
  {
    id: '80EE',
    icon: '🏠',
    title: 'Section 80EE: Home Loan Interest for First-Time Buyers',
    intro: 'Section 80EE is for first-time home buyers paying interest on a home loan. It makes owning a home more affordable by reducing tax on loan interest.',
    overview: 'This section provides a deduction for interest paid on home loans taken for buying or constructing a first home.',
    maxDeduction: 'Up to ₹50,000 per year.',
    whoCanClaim: 'First-time home buyers who have taken a loan from a financial institution or housing finance company.',
    eligibleItems: [
      'Interest on home loan taken for first residential property',
      'Home loan interest paid to banks or housing finance companies'
    ],
    eligibility: [
      'You must not own more than one residential property when the loan is sanctioned.',
      'Loan amount should not exceed the defined limit.',
      'Property should be in your name or jointly owned.'
    ],
    example: 'If your first home loan interest is ₹48,000 in a year, you can claim ₹48,000 deduction under Section 80EE.',
    notes: [
      'Only first-time homeowners are eligible.',
      'The property must be a residential house or apartment.',
      'This deduction is separate from the standard home loan interest deduction.'
    ],
    benefits: [
      'Supports first-home ownership.',
      'Reduces tax on home loan interest.',
      'Boosts financial planning for new homeowners.'
    ],
    documents: [
      'Loan statement showing interest paid',
      'Home loan sanction letter',
      'Property documents'
    ],
    beginnerExplanation: '80EE gives tax relief if you are buying your first home with a loan. It helps lower your tax by letting you deduct the interest you pay.'
  },
  {
    id: '80GGA',
    icon: '🌍',
    title: 'Section 80GGA: Donations for Scientific Research',
    intro: 'Section 80GGA covers donations to approved scientific research and rural development projects. It rewards charitable giving for public causes.',
    overview: 'This section allows deductions for donations made to organizations working in scientific research, rural development, or social causes.',
    maxDeduction: 'Whole amount of donation, depending on organization status and rules.',
    whoCanClaim: 'Individuals or organizations donating to notified funds, institutions, or research bodies.',
    eligibleItems: [
      'Donations to scientific research institutions',
      'Contributions to rural development programs',
      'Support for approved non-profit research agencies'
    ],
    eligibility: [
      'Donation must be to a notified institution or fund.',
      'Donor must have proof of payment and donation receipt.',
      'Donation should not be for personal or commercial benefit.'
    ],
    example: 'If you donate ₹10,000 to an approved rural development trust, the amount may be deductible under 80GGA based on the trust’s eligibility.',
    notes: [
      'Donations should be made by cheque, draft, or online transfer.',
      'Cash donations are not allowed for deduction.',
      'Verify the receiving organization’s approval before donating.'
    ],
    benefits: [
      'Encourages contributions to research and social projects.',
      'Offers a tax benefit on charitable giving.',
      'Helps employees support causes without extra cost.'
    ],
    documents: [
      'Donation receipt from the organization',
      'Bank transfer records',
      'Organization approval certificate'
    ],
    beginnerExplanation: 'Under 80GGA, you can save tax by donating to approved research or development causes. It is a good way to help society while lowering your taxable income.'
  },
  {
    id: '80GGB',
    icon: '🌐',
    title: 'Section 80GGB: Donations to Political Parties',
    intro: 'Section 80GGB covers donations made to political parties in India. It encourages transparency in political funding with tax relief.',
    overview: 'This section allows deduction for donations to registered political parties or electoral trusts through non-cash modes.',
    maxDeduction: 'Full amount of donation, subject to the payment method.',
    whoCanClaim: 'Individual taxpayers who donate to recognized political parties or electoral trusts.',
    eligibleItems: [
      'Donations to political parties',
      'Contributions to electoral trusts'
    ],
    eligibility: [
      'Donation must be by cheque, draft, or electronic transfer.',
      'The political party or trust must be registered under law.',
      'No cash donations are allowed for this deduction.'
    ],
    example: 'If you donate ₹5,000 to a registered political party by online transfer, you can claim the full ₹5,000 as a deduction.',
    notes: [
      'Only non-cash donations qualify.',
      'Verify the party or electoral trust registration first.',
      'No limit is specified, but proof of payment is essential.'
    ],
    benefits: [
      'Allows responsible political donations with tax benefit.',
      'Promotes non-cash funding transparency.',
      'Simple to claim with proper receipts.'
    ],
    documents: [
      'Donation receipt from the party or trust',
      'Bank transfer proof or cheque copy'
    ],
    beginnerExplanation: '80GGB lets you claim a deduction when you donate to registered political parties by bank transfer. It makes political giving tax-friendly if done correctly.'
  },
  {
    id: '80GG',
    icon: '🏢',
    title: 'Section 80GG: House Rent Deduction',
    intro: 'Section 80GG helps employees who pay rent but do not receive HRA. It offers relief for rent paid when living in a rented home.',
    overview: 'This section allows deduction of rent paid for residential accommodation if you do not receive House Rent Allowance (HRA) from your employer.',
    maxDeduction: 'Least of: ₹5,000 per month, 25% of total income, or rent paid minus 10% of income.',
    whoCanClaim: 'Individuals who pay rent and are not claiming HRA from their employer.',
    eligibleItems: [
      'Monthly rent payments for living accommodation',
      'Rent for a personal or family residence'
    ],
    eligibility: [
      'You must not receive HRA as part of salary.',
      'You must not own a residential property in the place of employment or business.',
      'Rent must be paid to a person other than a close relative.'
    ],
    example: 'If your salary is ₹6,00,000 and rent paid is ₹1,20,000, you may claim the least of the prescribed amounts under 80GG.',
    notes: [
      'You must submit a rental agreement and rent receipts.',
      'The deduction is available only for residential rent.',
      'A declaration of no HRA and no ownership is required.'
    ],
    benefits: [
      'Helps employees who live in rented accommodation.',
      'Offers tax relief without HRA benefits.',
      'Supports renters during onboarding and relocation.'
    ],
    documents: [
      'Rent receipts',
      'Rental agreement',
      'Declaration of non-ownership of residence'
    ],
    beginnerExplanation: '80GG lets you deduct rent paid if your employer does not give HRA. It is useful for employees who rent their home while working away from their hometown.'
  }
];
