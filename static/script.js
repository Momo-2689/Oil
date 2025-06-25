let currentProcess = 'A';

document.getElementById("processSelect").addEventListener("change", (e) => {
  currentProcess = e.target.value;
});

function updateFlowSpeed(flowRate) {
  const flow1 = document.getElementById("flow1");
  const flow2 = document.getElementById("flow2");

  flow1.style.animationDuration = `${10 / flowRate.station1_to_2}s`;
  flow2.style.animationDuration = `${10 / flowRate.station2_to_3}s`;

  document.getElementById("rate1").textContent = `${flowRate.station1_to_2} units/s`;
  document.getElementById("rate2").textContent = `${flowRate.station2_to_3} units/s`;

  console.log(`Process ${currentProcess} →`, flowRate);
}

async function fetchFlowRate() {
  try {
    const response = await fetch(`/flow_rate?process=${currentProcess}`);
    const data = await response.json();
    updateFlowSpeed(data);
  } catch (err) {
    console.error("Failed to fetch flow rate:", err);
  }
}

setInterval(fetchFlowRate, 1000);

// Function to generate random percentage
function getRandomPercentage() {
    return Math.floor(Math.random() * 101); // 0-100%
}

// Update single element
function updateRandomPercentage(elementId) {
    const percentage = getRandomPercentage();
    document.getElementById(elementId).setAttribute(
        'data-percentage',
        `${percentage}%`
    );
}

// Usage
updateRandomPercentage('terminal');
