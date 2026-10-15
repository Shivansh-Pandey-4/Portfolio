
export default function playTickSound() {
        const audioContext = new window.AudioContext();

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);

        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.08
        );

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.08);

        oscillator.onended = () => {
            void audioContext.close();
        };
    }