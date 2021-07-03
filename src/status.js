export default function heroStatus(obj) {
    const { health } = obj;

    if (health) {
        if (health < 15) {
            return 'critical';
        } if (health <= 50) {
            return 'wounded';
        }
        return 'healthy';
    }
    return null;
}

// console.log(heroStatus({health: 1000}))
// module.exports = heroStatus;
