import React from 'react'

const FeedbackPage = () => {
  return (
    <div class="relative bg-white/10 rounded-xl border border-white/20 shadow-lg p-10 max-w-lg mx-auto px-8 mt-20">
        <div class="absolute inset-0 bg-white/10 opacity-70 rounded-xl"></div>
        <div class="relative z-10">
            <h2 class="text-3xl font-bold mb-4 text-white">We Value Your Feedback!🪐</h2>
            <p class="text-white text-lg">Thank you for exploring our Relativistic Effects Visualizer! 
                Your feedback is essential in helping us improve and make this tool even more engaging and informative.

                <br />👉 Have a suggestion or idea?
                <br />👉 Found a bug or issue?
                <br />👉 Just want to share your experience?

                <br />We'd love to hear from you!
            </p>
            <h2 class="text-3xl font-bold mt-8 mb-4 text-white">Share Your Thoughts⋆⭒˚.⋆🔭</h2>
            <p class="text-white text-lg">Click the button below to access our feedback form. 
                It will only take a minute! Your input helps us build a better experience for everyone.
            </p>

            <div className="my-10 text-center">
                <button
                  type="submit"
                  className="text-lg bg-indigo-900 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg border-blue-700 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
                  onClick={() => window.open('https://forms.gle/PMd2G5cuWzEZhaCb7', '_blank')}
                >
                  Go To Feedback Form
                </button>
            </div>
        </div>
    </div>
  )
}

export default FeedbackPage
