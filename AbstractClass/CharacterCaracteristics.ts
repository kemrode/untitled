abstract class CharacterCaracteritics {
    name: string;
    weaponName: string;
    weaponStrength: number;
    armor: number;
    pointsOfLife: number;
    strength: number;
    endurance: number;

    constructor(name: string, weaponName: string, armor: number, pointsOfLife: number, strength: number, endurance: number, weaponStrength: number) {
        this.name = name;
        this.weaponName = weaponName;
        this.weaponStrength = weaponStrength;
        this.armor = armor;
        this.pointsOfLife = pointsOfLife;
        this.strength = strength;
        this.endurance = endurance;
    }

    fight(): number {
        const result = this.strength * this.weaponStrength;
        console.log(`l'attaque fait ${result} points de dégâts`);
        return result;
    }

    loosePointsOfLife(attackStrength: number) {
        const totalAttack = (attackStrength/this.endurance) - this.armor;
        const result = this.pointsOfLife - totalAttack;
        if (result > 0) {
            this.pointsOfLife = result;
            console.log(`il reste ${result} points de vie à ${this.name}`);
        } else {
            console.log(`cette attaque n'est pas efficace, il reste toujours ${this.pointsOfLife} points de vie à ${this.name}`);
        }
    }
}