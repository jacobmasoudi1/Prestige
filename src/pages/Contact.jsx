import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const formAction = form.action
    const formMethod = form.method

    fetch(formAction, {
      method: formMethod,
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          setStatus('success')
          setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
        } else {
          setStatus('error')
        }
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section className="contact-page">
      <div className="contact-grid">
        <div className="contact-form-column">
          <h1>Feel free to reach out for any questions</h1>
          <div className="contact-info">
            <p>Your address here</p>
            <p><a href="mailto:info@prestigeorganizing.com">info@prestigeorganizing.com</a></p>
            <p><a href="tel:+1234567890">(123) 456-7890</a></p>
          </div>
          <form
            className="contact-form"
            action="https://formsubmit.co/info@prestigeorganizing.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <label>
              First Name <span className="required">*</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name <span className="required">*</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Enter your email <span className="required">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Enter your phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Brief Description of Your Project <span className="required">*</span>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </label>
            {status === 'success' && (
              <p className="form-message form-message--success">Thanks! We’ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-message form-message--error">Something went wrong. Please email us directly.</p>
            )}
            <button type="submit" className="button-link contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
          </form>
        </div>
        <div className="contact-image-column">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
            alt=""
            className="contact-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
