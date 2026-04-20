document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. SPA ROUTING & STATE MANAGEMENT ---
    
    const routes = {
        'overview': document.getElementById('overview-section'),
        'network': document.getElementById('network-section'),
        'threats': document.getElementById('threats-section')
    };

    const navLinks = document.querySelectorAll('.nav-links a');

    function navigateTo(page, pushToHistory = true) {
        Object.values(routes).forEach(section => {
            if (section) {
                section.style.display = 'none';
                section.style.animation = 'none'; 
            }
        });

        const targetRoute = routes[page] ? page : 'overview';
        const targetSection = routes[targetRoute];

        if (targetSection) {
            targetSection.style.display = targetRoute === 'overview' ? 'flex' : 'block';
            targetSection.style.animation = "fadeInUp 0.3s ease-out forwards";
        }

        navLinks.forEach(link => {
            const isActive = link.dataset.route === targetRoute;
            link.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        if (pushToHistory) {
            const url = targetRoute === 'overview' ? window.location.pathname : `?page=${targetRoute}`;
            window.history.pushState({ page: targetRoute }, "", url);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const route = link.dataset.route;
            navigateTo(route, true); 
        });
    });

    window.addEventListener('popstate', (e) => {
        const page = e.state ? e.state.page : 'overview';
        navigateTo(page, false); 
    });

    const urlParams = new URLSearchParams(window.location.search);
    const initialPage = urlParams.get('page') || 'overview';
    
    window.history.replaceState({ page: initialPage }, "", window.location.href);
    navigateTo(initialPage, false); 


    // --- 2. INTERACTIVE WIDGET LOGIC ---
    
    document.getElementById("start-btn").addEventListener("click", function() {
        this.innerText = "Diagnostic Running...";
        this.classList.add("running");
        document.getElementById("status-message").style.display = "block";
    });

    const calculateBtn = document.getElementById("calculate-btn");
    if(calculateBtn) {
        const anomaliesInput = document.getElementById("anomalies");
        const severityInput = document.getElementById("severity");
        const errorMsg = document.getElementById("error-msg");
        const resultDisplay = document.getElementById("result-display");
        const riskResult = document.getElementById("risk-result");

        calculateBtn.addEventListener("click", function() {
            const anomalies = parseInt(anomaliesInput.value);
            const severity = parseInt(severityInput.value);

            if (isNaN(anomalies) || isNaN(severity)) {
                errorMsg.innerText = "Please input valid numerical telemetry data.";
                resultDisplay.style.display = "none";
                return;
            }
            if (anomalies < 0 || severity < 1 || severity > 10) {
                errorMsg.innerText = "Error: Invalid severity range or anomaly count.";
                resultDisplay.style.display = "none";
                return;
            }

            errorMsg.innerText = "";
            
            // Simple risk formula for demonstration
            const baseScore = anomalies * (severity * 1.5);
            const finalScore = Math.min(baseScore, 100); // Cap at 100
            
            riskResult.innerText = finalScore.toFixed(1); 
            
            // Change color based on risk
            riskResult.style.color = finalScore > 75 ? "#ef4444" : (finalScore > 40 ? "#f59e0b" : "#10b981");

            resultDisplay.style.display = "block";
            resultDisplay.animate([
                { transform: 'translateY(10px)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ], { duration: 300, easing: 'ease-out' });
        });
    }
});