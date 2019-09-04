const sgMail=require('@sendgrid/mail')

//const sendgridAPIKey='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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'jayeshjadhav357@gmail.com',
        subject:'Thank you for joining us',
        text:`Welcome to the app, ${name}.Let me know how you get along with the app.`
    })
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'jayeshjadhav357@gmail.com',
        subject:'Sorry to see you go',
        text:`Goodbye,${name}.I hope to see you again`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}