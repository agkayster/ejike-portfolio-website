import React from 'react';

const EmailFormComponent = ({
	form,
	handleInputChange,
	sendEmail,
	success,
	error,
	formError,
}) => {
	return (
		<div className='h-2/3 mb-8 md:mb-4 lg:h-full lg:w-1/2 flex flex-col'>
			{/* {formError && (
				<span className='text-red-600 font-semibold text-sm md:text-lg text-center md:-mb-6'>
					Message or email cannot be empty!
				</span>
			)} */}
			{success && (
				<span className='text-green-600 font-semibold text-sm md:text-lg text-center md:-mb-6'>
					Message sent successfully!
				</span>
			)}
			{error && (
				<span className='text-red-600 font-semibold text-sm md:text-lg text-center md:-mb-6'>
					Message not sent!
				</span>
			)}
			<form
				ref={form}
				onSubmit={sendEmail}
				className='h-full lg:h-[92%] lg:w-full bg-red-50 rounded-xl text-xl flex flex-col gap-4 p-2 
				md:mb-0 md:gap-6 md:p-6 md:justify-center md:mt-10 '>
				<span>Dear Ejike,</span>
				<textarea
					name='user_message'
					id=''
					rows={12}
					className='bg-transparent border-b-2 border-b-black outline-none resize-none'
				/>
				<span>My email address is:</span>
				<input
					name='user_email'
					type='text'
					onChange={handleInputChange}
					className='bg-transparent border-b-2 border-b-black outline-none'
				/>
				<span>Regards,</span>
				<button
					type='submit'
					className='bg-purple-200 rounded font-semibold text-gray-600 p-1 md:p-4'>
					Send
				</button>
			</form>
		</div>
	);
};

export default EmailFormComponent;
