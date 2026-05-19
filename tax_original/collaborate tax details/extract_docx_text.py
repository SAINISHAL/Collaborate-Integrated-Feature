from zipfile import ZipFile
from pathlib import Path
import re
path = Path(r'c:\Users\saini\OneDrive\Desktop\collaborate tax details\Tax_Deductions_Guide.docx')
with ZipFile(path) as z:
    data = z.read('word/document.xml').decode('utf-8')
text = re.sub(r'<.*?>','', data)
text = re.sub(r'\s+',' ', text).strip()
print(text[:15000])
