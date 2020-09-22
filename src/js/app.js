export default function healthIndicator (characterData) {
    if (characterData.health > 50) {
        return 'healthy';
    } else if (characterData.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}