import React, { useRef, useEffect } from 'react';

export default function Dialog({ children, state }) {
	const dialogRef = useRef();

	/* causes our dialog box to show if message is sent successfully */
	useEffect(() => {
		state ? dialogRef.current?.showModal() : dialogRef.current?.close();
	}, [state]);

	/* close our dialog box */
	const closeDialog = () => {
		dialogRef.current?.close();
	};

	return (
		<dialog
			ref={dialogRef}
			className='fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50'>
			<div className='md:w-[500px] max-w-full bg-gray-200 flex flex-col'>
				<div className='flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400'>
					<button
						onClick={closeDialog}
						className='mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white'>
						x
					</button>
				</div>
				<div className='px-5 pb-6'>{children}</div>
			</div>
		</dialog>
	);
}
