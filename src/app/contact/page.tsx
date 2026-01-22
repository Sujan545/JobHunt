import ContactForm from "@/components/shared/ContactForm";


export default function Contact() {
    return (
        <>
            <div className="min-h-screen flex  bg-[#d1dced] items-center justify-center px-20">
                <div className="max-w-full justify-between py-10 flex gap-20 ">
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold mb-4 ">Contact Us</h1>
                            <p className="text-gray-600 mb-6">
                                Email, call, or complete the form to learn how Snappy can solve your messaging problem.
                            </p>
                        <div className="space-y-2 mb-8">
                            <p>info@jobhunt</p>
                            <p>321-221-321</p>
                            <p className="mt-4 font-semibold underline">Customer Support</p>
                        </div>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-600">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Customer Support</h4>
                                <p>Our support team is available around the clock.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Feedback Suggestion</h4>
                                <p>Our support team is available around the clock.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-1">Media Inquiries</h4>
                                <p>Our support team is available around the clock.</p>
                            </div>
                        </div>
                    </div>
                   <ContactForm/>
                </div>
            </div>
        </>
    )
}