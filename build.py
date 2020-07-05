with open('./app/index.html','r') as f:
    html = f.read()

with open('./app/style.css','r') as f:
    css = f.read()

with open('./app/app.js','r') as f:
    js = f.read()

with open('./app/template.js','r') as f:
    template = f.read()

def insert_code(html, css, js, template):
    html = html.replace('insert css', css).replace('insert js', js)
    template = template.replace('const someHTML = ``', f"const someHTML = `{html}`")
    html = template.replace('insert html', html)
    return html

newHtml = insert_code(html,css,js,template)

with open('index.js','w') as f:
    f.write(newHtml)
    print('Generated index.js')