import React, { useState } from 'react'
import { Button, Image, StyleSheet, View, Text } from 'react-native'

const PoroPlay = () => {
    const [isBored, setIsBored] = useState(true);

    function play() {
        if (isBored === false) {
            return (
                <>
                    <View>
                        <Text style={styles.title}>El poro esta descansando</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/img/poroSleep.png')}
                            style={{ width: 300, height: 300, marginTop: 80, marginBottom: 45,}}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => { setIsBored(true) }}
                            title={isBored ? 'Jugar!' : 'Despertar'}
                        />
                    </View>
                </>
            )
        } else {
            return (
                <>
                    <View>
                        <Text style={styles.title}>El poro quiere jugar</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/img/poroPlay.png')}
                            style={{ width: 300, height: 300, marginTop: 80, marginBottom: 45,}}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => { setIsBored(false) }}
                            title={isBored ? 'Jugar!' : 'Despertar'}
                            color={'green'}
                        />
                    </View>
                </>
            )
        }
    };
    return (

        <View style={styles.container}>

            {play()}

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

export default PoroPlay