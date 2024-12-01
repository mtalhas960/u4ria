import Form from 'next/form'
const SubscribeForm = () => {
    const submitForm = async (e) => {
        'use server'
        e.preventDefault()
    }
    return (
        <Form action={submitForm} className='d-flex flex-column flex-lg-row gap-2 w-100 py-4'>
            <input className='p-3 border-0 rounded-2 w-100' name='email' autoComplete='email' type="text" placeholder='Enter your email' />
            <input className='hover3 rounded-2 p-3 w-auto' type="submit" value='Subscribe' />
        </Form>
    )
}

export default SubscribeForm
