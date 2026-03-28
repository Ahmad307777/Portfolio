import docx

def read_docx(file_path):
    doc = docx.Document(file_path)
    full_text = []
    for element in doc.element.body:
        if element.tag.endswith('p'):
            para = docx.text.paragraph.Paragraph(element, doc)
            if para.text:
                full_text.append(para.text)
        elif element.tag.endswith('tbl'):
            table = docx.table.Table(element, doc)
            for row in table.rows:
                row_text = [cell.text.strip() for cell in row.cells]
                full_text.append(' | '.join(row_text))
    return '\n'.join(full_text)

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        print(read_docx(sys.argv[1]))
