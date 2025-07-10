document.getElementById('aedForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const deviceId = document.getElementById('deviceId').value;

  const payload = { deviceId };

  const res = await fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await res.json();
  document.getElementById('result').textContent = JSON.stringify(result, null, 2);
});