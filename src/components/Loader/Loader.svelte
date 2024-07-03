<script>
        // @ts-nocheck
    import { gsap } from 'gsap/dist/gsap';
    import { onMount, onDestroy } from 'svelte';
    export let loadComplete = () => {};
    let countdownElement;
    let progressCircle;
    const radius = 90;
    const circumference = 2 * Math.PI * radius;

    // Function to update the loader
    function updateLoader(progress) {
    const percentage = Math.round(progress * 100);
    countdownElement.innerHTML = percentage + '%';
    
        // Update the circle progress
        const offset = circumference - (percentage / 100) * circumference;
        gsap.set(progressCircle, {strokeDashoffset: offset});
    }

    async function loadAssets() {
        const assets = [
            import('gsap/dist/gsap'),
            import('gsap/dist/ScrollTrigger'),
            import('mouse-follower'),
            import('$lib/videos/intro.webm'),
            import('$lib/images/travel/amsterdam.jpg'),
            import('$lib/images/travel/india.jpg'),
            import('$lib/images/travel/tokyo.jpg'),
            import('$lib/images/travel/vienna.jpg'),
            import('$lib/images/travel/baku.jpg'),
            import('$lib/images/travel/hanoi.jpg'),
            import('$lib/images/travel/amsterdam.jpg'),
            import('$lib/images/travel/amsterdam.jpg'),
            // Add more dynamic imports as needed
        ];

        const total = assets.length;
        let loaded = 0;

        for (const assetPromise of assets) {
            await assetPromise;
            loaded++;
            updateLoader(loaded / total);
        }

        const tl = gsap.timeline({
            onComplete: function() {
                loadComplete();
            }
        });
          	// Animate each span
			tl.to("#text1", { opacity: 1, duration: 0.3, delay: 0.2 })
			.to("#text1", { opacity: 0, duration: 0.3, delay: 0.2 })
			.to("#text2", { opacity: 1, duration: 0.3, delay: 0.2 })
			.to("#text2", { opacity: 0, duration: 0.3, delay: 0.2 })
			.to("#text3", { opacity: 1, duration: 0.3, delay: 0.2 })
			.to("#text3", { opacity: 0, duration: 0.3, delay: 0.2 }); // You can add code here to transition to your main content
    }

    function getGreeting() {
        const hour = new Date().getHours();
        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = "सुप्रभातम्‌"; // Good morning
        } else if (hour >= 12 && hour < 17) {
            greeting = "शुभ दिवा"; // Good afternoon
        } else if (hour >= 17 && hour < 21) {
            greeting = "शुभ सन्ध्या"; // Good evening
        } else {
            greeting = "शुभ रात्रि"; // Good night
        }

        return greeting;
    }
    
    onMount(() => {

            countdownElement = document.getElementById('countdown');
            progressCircle = document.getElementById('progress-circle');

            // Calculate the circumference of the circle
            

            gsap.set(progressCircle, {
            strokeDasharray: circumference,
            strokeDashoffset: circumference
            });

            // gsap.to({value: 0}, {
            // value: 100,
            // duration: 4,
            // ease: "power1.in",
            // onUpdate: function() {
            //     const progress = Math.round(this.targets()[0].value);
            //     countdownElement.innerHTML = progress + '%';
                
            //     // Update the circle progress
            //     const offset = circumference - (progress / 100) * circumference;
            //     gsap.set(progressCircle, {strokeDashoffset: offset});
            // }
            // });

            // Start loading
            loadAssets().catch(error => console.error("Error loading assets:", error)); 
            
		//////
    })
</script>


<div class="fixed xs:w-full xs:h-full lg:w-screen lg:h-screen z-50 bg-black flex justify-center items-center" id="loaderParent">
        <div class="countdown-container">
            <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="#ddd" stroke-width="1"/>
                <circle cx="100" cy="100" r="90" fill="none" stroke="#A367B1" stroke-width="2" stroke-dasharray="565.48" stroke-dashoffset="565.48" id="progress-circle"/>
            </svg>
            <div id="countdown" class="font-thin text-brand top-1/2 left-1/2 absolute text-2xl">0%</div>
        </div>
        <span id="text1" class="opacity-0 font-teko text-base-lite text-4xl fixed mt-64 font-thin">नमस्ते</span>
        <span id="text2" class="opacity-0 font-teko text-base-lite text-4xl fixed mt-64 font-thin">Hello</span>
        <span id="text3" class="opacity-0 font-teko text-base-lite text-4xl fixed mt-64 font-thin">{getGreeting()}</span>

</div>

<style>
    .countdown-container {
        position: relative;
        width:200px;
        height: 200px;
        }

        #countdown {
          
            transform: translate(-50%, -50%);
           
        }

        svg {
        transform: rotate(-90deg);
        }
</style>