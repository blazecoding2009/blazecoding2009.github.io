import pdfkit

pdf_file = open('resume.pdf', 'rb')
html_file = pdfkit.from_file(pdf_file, "my_html_file.html")

pdf_file.close()

