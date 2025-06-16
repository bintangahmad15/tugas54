from flask import Flask, render_template, request, redirect, url_for
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

# Konfigurasi Email (GANTI DENGAN DETAIL EMAIL ANDA)
SENDER_EMAIL = 'emailanda@gmail.com'
SENDER_PASSWORD = 'app_password_anda_gmail' # Gunakan App Password jika pakai Gmail
RECEIVER_EMAIL = 'emailpenerima@contoh.com' # Email tujuan form

@app.route('/')
def home():
    """Melayani file HTML landing page."""
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    """Memproses data yang dikirim dari formulir kontak."""
    if request.method == 'POST':
        name = request.form['nama']
        email = request.form['email']
        phone = request.form.get('telepon', 'Tidak Ada') # Gunakan .get() untuk opsional
        message = request.form['pesan']

        try:
            # Kirim Email
            msg = MIMEMultipart()
            msg['From'] = SENDER_EMAIL
            msg['To'] = RECEIVER_EMAIL
            msg['Subject'] = f"Pesan Baru dari Landing Page: {name}"

            body = f"""
            Nama: {name}
            Email: {email}
            Telepon: {phone}
            Pesan:
            {message}
            """
            msg.attach(MIMEText(body, 'plain'))

            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
                smtp.login(SENDER_EMAIL, SENDER_PASSWORD)
                smtp.send_message(msg)

            print(f"Pesan dari {name} ({email}) berhasil dikirim.")
            # Redirect kembali ke landing page dengan pesan sukses
            return redirect(url_for('home', success=True))
        except Exception as e:
            print(f"Gagal mengirim email: {e}")
            # Redirect kembali dengan pesan error
            return redirect(url_for('home', error=True))

if __name__ == '__main__':
    app.run(debug=True) # debug=True akan me-restart server saat ada perubahan kode
