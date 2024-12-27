import React from 'react'
import c2 from '../assets/images/c2.png'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.png'
import c5 from '../assets/images/c5.png'

const ConceptPage = () => {
  return (
    <div class="relative bg-white/10 rounded-xl border border-white/20 shadow-lg p-10 my-20 mx-[300px] mt-20">
        <div class="absolute inset-0 bg-white/10 opacity-70 rounded-xl"></div>
        <div class="relative z-10">
            <h2 class="text-4xl font-bold mb-6 text-center text-white">
                Concept Explained: &nbsp;
                <span class="highlight highlight-variant-11 highlight-cyan-700 highlight-spread-l-xl highlight-spread-t-sm">
                    Special Relativity
                </span>
            </h2>
            <p class="text-white text-lg">Special relativity is a groundbreaking theory in physics that transforms
                 our understanding of motion, time, and space. Below is an overview of the key principles and phenomena, 
                 explained with relatable examples:
            </p>
            {/* ------- section 1 ------- */}
            <h3 class="text-2xl font-bold mt-6 text-white">
                1. Principle of Relativity
            </h3>
            <p class="text-white text-lg">
                &emsp; If an object moves in a straight line at a constant speed, either perspective is equally
                 valid since they are considered as valid inertial frames. Therefore, whether we say that a train (having a constant 
                 velocity) is moving relative to a person or the person is moving relative to the train, both statements would be
                 correct. A frame of reference formally represents a point of view, especially when at rest or moving at a
                  constant velocity.
            </p>

            {/* ------- section 2 ------- */}
            <h3 class="text-2xl font-bold mt-6 text-white">
                2. Speed of Light
            </h3>
            <p class="text-white text-lg">
                &emsp; A person sitting still on a moving train may appear to have a velocity
                 V relative to someone standing outside the train. Intuitively, one might expect the same
                  principle to apply to a beam of light on the train- its speed should depend on the motion
                 of the train (i.e., c+V). However, the Michelson-Morley experiment revealed something entirely
                  unexpected and perplexing at the time: unlike other moving objects, the speed of light remains
                  constant in all frames of reference. Regardless of whether the source of light is stationary or
                   in motion, light always travels at the constant universal speed, c.
            </p>
            <img
                className="mt-8 mx-auto h-80 w-150"
                src={c2}
                alt="clueless padme meme"
            />
            <p class="text-white mt-2 text-center text-md">
                fig 1., It's c, you see
            </p>

            {/* ------- section 3 ------- */}
            <h3 class="text-2xl font-bold mt-6 text-white">
                3. Simultaneous Events
            </h3>
            <p class="text-white text-lg">
                &emsp; How do we observe simultaneous events? When the photons bouncing off of the objects fall
                on the detectors (commonly eyes) at the same time, we can say that the events are simultaneous.
                In our day to day life, the minor difference in time of events often goes unnoticed.
                However, in the context of objects moving near the speed of light, this difference becomes
                 significant- the event that the object is moving towards (event 1) appears to
                 have occured first followed by the event that the object is moving away from (event 2), since the photons
                 from event 1 incident on the object earlier than the photons from event 2. Therefore the events that seem
                 simultaneous in one frame of reference may not be so in another frame of reference. Highly recommend this
                 video by &nbsp;
                 <a href="https://youtu.be/SrNVsfkGW-0?si=PnSK3KDM6RoVTqKw" class="text-cyan-400 hover:underline">
                    minutephysics
                 </a>.
            </p>
            <img
                className="mt-8 mx-auto h-60 w-90"
                src={c3}
                alt="relativity of simultaneity"
            />
            <p class="text-white mt-2 text-center text-md">
                fig 2., Relativity of simultaneity (credits: minutephysics)
            </p>

            {/* ------- section 4 ------- */}
            <h3 class="text-2xl font-bold mt-6 text-white">
                4. Time dilation
            </h3>
            <p class="text-white text-lg">
                &emsp; Consider the scenario in the figure below, with a light pulse emitted from the floor 
                in the hypothetical train going in a speed close to the speed of light which bounces off the mirror
                 on ceiling and returns back. Mavis who is inside the train sees a trajectory of a straight line, whereas
                 Stanley who is outside the train sees a triangular trajectory (which doesn't happen in non-relativistic speeds).
                 Since the speed of light is constant and the distance varies, the only remaining parameter that
                  can change is the time itself. <br />&emsp; 
                 In simple words, Mavis observes that the light pulse takes less time to travel back and
                  forth than Stanley does.
            </p>
            <img
                className="mt-8 mx-auto h-80 w-90"
                src={c4}
                alt="Time dilation explained"
            />
            <p class="text-white mt-2 text-center text-md">
                fig 3., Time dilation explained (credits: University Physics, Sears and Zemansky)
            </p>

            {/* ------- section 5 ------- */}
            <h3 class="text-2xl font-bold mt-6 text-white">
                5. Length Contraction
            </h3>
            <p class="text-white text-lg">
                &emsp; Length is the space-time separation between two events that occur at the same time.
                 However, in special relativity, the concept of "same time" is not absolute—what is simultaneous
                  for one observer may not be for another. For instance, Stanley measures the distance between two
                   events happening at the same time as x (shown as L in the diagram). However, Mavis, who is moving
                    relative to Stanley, does not see these two events as simultaneous. Because of the relativity
                     of simultaneity, she will perceive one event occurring before the other.
                <br />
                &emsp; Due to this difference in perception, Mavis will measure the distance between the events
                 as Lp, which is greater than x. This happens because the events are not simultaneous 
                 for her, and this asymmetry in how time and space are experienced causes her to see a larger 
                 distance. It's not just about speed—it's about how time and space are intertwined in relativity.
                <br />
                &emsp; To explain further, when objects move at extremely high speeds, time dilates. This
                 means that time passes slower for someone moving at high speeds, like Mavis, compared to someone 
                 at rest, like Stanley. For Stanley, the events happen at the same time, and he measures the distance as x. 
                 But for Mavis, time passes slower for her, so her perception of the events' timing is stretched, which 
                 leads to her measuring a longer distance.
                <br />
                &emsp; To summarize, objects moving at high speeds appear shorter along the direction of motion 
                when observed from a stationary point, a phenomenon known as length contraction. This effect becomes 
                more significant as the object's speed approaches the speed of light.
                <br />
                &emsp; I strongly recommend watching this video by &nbsp;
                <a href="https://youtu.be/TxW6_E3uLuo?si=C9Qyfh_4CoIwrMIO" class="text-cyan-400 hover:underline">
                    The Science Asylum
                </a>.
            </p>

            <img
                className="mt-8 mx-auto h-80 w-90"
                src={c5}
                alt="Length contraction explained"
            />
            <p class="text-white mt-2 text-center text-md">
                fig 4., Length contraction explained (credits: The Science Asylum)
            </p>

            {/* ------- Author's footnote ------- */}
            <h3 class="text-2xl font-bold mt-6 text-white">
                Author's footnote
            </h3>
            <p class="text-white text-lg">
                &emsp; Although I have spoken about Special Relativity for some time here, I wouldn't call
                myself an expert, and I am in the process of learning this too, but I felt compelled to
                share my perspective on the same and look forward to learning more on this. Thank you for 
                reading up until this point. Feel free to share your thoughts on the Feeback tab, constructive
                critizism is highly appreciated. <br />
                If you wish to dive further into this topic, I'd suggest exploring the following resources:
            </p>
            <ul class="list-disc pl-8 mt-4 text-white text-lg space-y-2">
                <li>
                    <a href="https://www.amazon.in/Sears-Zemanskys-University-Physics-Modern/dp/0321982584" class="text-cyan-400 hover:underline">
                        Sears & Zemansky's University Physics With Modern Physics
                    </a> - if you prefer a systematic and clear explanation
                </li>
                <li>
                    <a href="https://youtu.be/uTyAI1LbdgA?si=LmspBDYokvJEKCb8" class="text-cyan-400 hover:underline">
                        Special Relativity by ScienceClic English
                    </a> - if you want a quick and concise explanation with appealing visuals
                </li>
                <li>
                    <a href="https://www.youtube.com/@ScienceAsylum" class="text-cyan-400 hover:underline">
                        Videos by The Science Asylum
                    </a> - if you prefer geometric explanations and just algebra doesn't cut it for you (PS: this channel
                    clearly explained length contraction and convinced me that it isn't an optical illusion)
                </li>
                <li>
                    Videos by&nbsp;
                    <a href="https://www.youtube.com/@fermilab" class="text-cyan-400 hover:underline">
                        Fermilab
                    </a> for the math behind this and&nbsp;
                    <a href="https://www.youtube.com/@minutephysics" class="text-cyan-400 hover:underline">
                        minutephysics
                    </a> to learn this with lorentz transformations visually
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ConceptPage