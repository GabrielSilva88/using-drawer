import React from "react";
import { View, Text, Button } from "react-native";

export default function Contato() {

    return(
        <View>
            <Text>Pagina Contato</Text>
        </View>
    )
}

/**
 *      removido para uso Buttom Tabs 
 * import React from "react";
import { View, Text, Button } from "react-native";

import { useNavigation, StackActions } from "@react-navigation/native";

export default function Contato() {
    const navigation = useNavigation();

    function handleHome() {
        navigation.dispatch(StackActions.popToTop())
    }
    return(
        <View>
            <Text>Pagina Contato</Text>
            <Button title="Voltar Home" onPress={handleHome}/>
        </View>
    )
}
 */