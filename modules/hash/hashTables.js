export class HashTable {
    store = new Array(32);

    hash(key) {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum % this.store.length;
    }

    add(key) {
        this.store[this.hash(key)] = key;
    }

    get(key) {
        return [this.hash(key), this.store[this.hash(key)]]
    }

    delete(key) {
        this.store[this.hash(key)] = null
    }
}

export class HashTableRandom {
    store = new Array(32);

    hash(key) {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i) * i;
        }
        return sum % this.store.length;
    }

    // hash(a)
    // {
    //     a = (a+0x7ed55d16) + (a<<12);
    //     a = (a^0xc761c23c) ^ (a>>19);
    //     a = (a+0x165667b1) + (a<<5);
    //     a = (a+0xd3a2646c) ^ (a<<9);
    //     a = (a+0xfd7046c5) + (a<<3);
    //     a = (a^0xb55a4f09) ^ (a>>16);
    //     if( a < 0 ) a = 0xffffffff + a;
    //     return a;
    // }
    add(key) {
        this.store[this.hash(key)] = key;
    }

    get(key) {
        return [this.hash(key), this.store[this.hash(key)]]
    }

    delete(key) {
        this.store[this.hash(key)] = null
    }
}


export class HashTableNode {
    store = new Array(30);

    hash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum % this.store.length;
    }

    add(key) {
        this.store[this.hash(key)] = this.store[this.hash(key)] || [];
        this.store[this.hash(key)].push({
                key: () => {
                    return this.hash(key)
                },
                value: key
            }
        );
    }

    get(key) {
        const item = (this.store[this.hash(key)] || []).find((item) => item.value === key);
        return item && [this.hash(key), item.value];
    }

    delete(key) {
        this.store[this.hash(key)] = null
    }
}

