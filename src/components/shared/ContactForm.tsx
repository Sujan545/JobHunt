
"use client"

export default function ContactForm() {
    return (

        <div className="bg-white rounded-xl w-1/2 p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-1">Get in Touch</h2>
            <p className="text-sm text-gray-500 mb-6">You can reach us anytime</p>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input className="rounded-2xl border border-gray-300 px-2 py-1 outline-none" type="text" placeholder="First name" />
                    <input className="rounded-2xl border border-gray-300 px-2 py-1 outline-none" type="text" placeholder="Last name" />
                </div>

                <input className="rounded-2xl border border-gray-300 px-2 py-1 outline-none w-full" type="email" placeholder="Your email" />
                <input className="rounded-2xl border border-gray-300 px-2 py-1 outline-none w-full" type="text" placeholder="Phone number" />
                <textarea className="rounded-2xl border border-gray-300 px-2 py-1 outline-none w-full h-28 resize-none" placeholder="How can we help?"></textarea>

                <button className="w-full bg-gray-700 text-white py-3 rounded-full hover:bg-gray-900 transition">
                    Submit
                </button>

                <p className="text-xs text-gray-400 text-center">
                    By contacting us, you agree to our <strong className="text-black">Terms of Service </strong> and <strong className="text-black">Privacy Policy</strong>
                </p>
            </form>
        </div>

    )
}