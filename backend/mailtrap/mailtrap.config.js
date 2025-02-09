import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.SMTP_MAIL, // generated ethereal user
		pass: process.env.SMTP_PASSWORD, // generated ethereal password
	},
});

export const sender = {
	email: "mailtrap@demomailtrap.com",
	name: "Balram Dhakad",
};