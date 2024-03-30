'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import EmailFormComponent from '@/components/emailForm';

const ContactPage = () => {
	const [input, setInput] = useState('');

	const [success, setSuccess] = useState(false);

	const [error, setError] = useState(false);

	const [formError, setFormError] = useState(false);

	const text = 'Say Hello';

	const form = useRef();

	const handleInputChange = (e) => {
		const { value } = e.target;
		setInput(value);
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

		if (input === '') {
			setFormError(true);
			return null;
		} else {
			return emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_SERVICE_ID,
					process.env.NEXT_PUBLIC_TEMPLATE_ID,
					form.current,
					{
						publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
					}
				)
				.then(
					() => {
						setSuccess(true);
						setInput('');
						form.current.reset();
					},
					(error) => {
						setError(true);
					}
				);
		}
	};

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* TEXT CONTAINER */}
				<div className='h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl md:text-6xl'>
					<div>
						{text.split('').map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}>
								{letter}{' '}
							</motion.span>
						))}
						😁
					</div>
				</div>
				{/* FORM CONTAINER */}
				<EmailFormComponent
					form={form}
					sendEmail={sendEmail}
					handleInputChange={handleInputChange}
					success={success}
					error={error}
					formError={formError}
				/>
			</div>
		</motion.div>
	);
};

export default ContactPage;
