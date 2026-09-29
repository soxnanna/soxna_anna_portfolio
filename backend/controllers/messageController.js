/* ==============================================
   controllers/messageController.js
   ============================================== */

const Message    = require('../models/messageModel');
const { Resend } = require('resend');

// Configuration Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// @desc    Envoyer un message
// @route   POST /messages
const envoyerMessage = async (req, res) => {
  try {
    const { nom, email, objet, message } = req.body;
    
    const nouveauMessage = await Message.create({
      nom, email, objet, message
    });

    // Envoi de l'email de notification à l'admin via Resend
    try {
      await resend.emails.send({
        from: 'portfolio@resend.dev',
        to: 'soxnanna@gmail.com',
        subject: `[Portfolio] Nouveau message : ${objet}`,
        html: `
          <h2>Nouveau message de portfolio</h2>
          <p><strong>De:</strong> ${nom} (${email})</p>
          <p><strong>Objet:</strong> ${objet}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });
      console.log('📧 Email envoyé avec succès via Resend !');
    } catch (mailError) {
      console.error('❌ Erreur technique lors de l\'envoi de l\'email:', mailError);
      // On ne bloque pas la réponse client car le message est déjà en base
    }

    res.status(201).json({ success: true, data: nouveauMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message.' });
  }
};

// @desc    Voir tous les messages (Admin)
// @route   GET /messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
};

module.exports = { envoyerMessage, getMessages };
