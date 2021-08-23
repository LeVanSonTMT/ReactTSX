import React from "react";
import { Alert, Button, Text, View } from "react-native";
// import { TextInput } from 'react-native-paper';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation";
import { TextInput } from 'react-native-paper';
import axios from "axios"

type ProfileScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Login'>;


const Login = ({ navigation }: ProfileScreenNavigationProp) => {
    const [account, setAccount] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <View style={{
            justifyContent: "center",
            flex: 1,
            alignContent: "center",
        }}>
            <Text>Login dasd</Text>
            <View>
                <TextInput
                    label="account"
                    value={account}
                    onChangeText={text => setAccount(text)}
                />
            </View>
            <View>
                <TextInput
                    label="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <Button title="Login" onPress={() => {
                axios.post("https://qlsc.maysoft.io/server/api/auth/login", {
                    username: account,
                    password: password
                }).then(({ data }) => {
                    console.log(data);

                    navigation.navigate("Home")
                }).catch((err) => {
                    Alert.alert("err", "eerr" + err)
                })



            }} ></Button>
        </View>
    )
}


export default Login