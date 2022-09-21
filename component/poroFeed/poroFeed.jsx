import React, { useState } from 'react'
import { Button, Image, StyleSheet, View, Text } from 'react-native';

const PoroFeed = () => {
    const [isHungry, setIsHungry] = useState(true);

    function eat() {
        if (isHungry === false) {
            return (
                <>
                    <View>
                        <Text style={styles.title}>El poro esta comiendo</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/img/poroEating.png')}
                            style={{ width: 300, height: 300, marginTop: 80, marginBottom: 45,}}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => { setIsHungry(true) }}
                            title={isHungry ? 'Puedes alimentarme?' : 'Genial!'}
                        />
                    </View>
                </>
            )
        } else {
            return (
                <>
                    <View>
                        <Text style={styles.title}>El poro tiene hambre</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/img/poroHungry.png')}
                            style={{ width: 300, height: 300, marginTop: 80, marginBottom: 45,}}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => { setIsHungry(false) }}
                            title={isHungry ? 'Puedes alimentarme?' : 'Genial!'}
                            color={'green'}
                        />
                    </View>
                </>
            )
        }
    };
    return (

        <View style={styles.container}>

            {eat()}

        </View>

    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        marginBottom: 20,
        marginTop: 20,
        fontFamily: 'Caudex-Bold',
        color: '#e2d9c6',

    },
    container: {
        flex: 1,
        backgroundColor: '#2c2f3e',
        marginTop: 30,
        alignItems: 'center',
    },
});

export default PoroFeed