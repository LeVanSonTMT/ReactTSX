import React from "react";
import { Alert, Button, Text, View } from "react-native";
// import { TextInput } from 'react-native-paper';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { TextInput } from "react-native-paper";
import axios from "axios";

type ProfileScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

const Login = ({ navigation }: ProfileScreenNavigationProp) => {
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        margin: 20,
        alignContent: "center",
      }}
    >
      <View
        style={{ margin: 20, justifyContent: "center", alignContent: "center", width: "100%"}}
      >
        <Text>Login</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          label="account"
          value={account}
          onChangeText={(text) => setAccount(text)}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          label="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        title="Login"
        onPress={() => {
          axios
            .post("https://qlsc.maysoft.io/server/api/auth/login", {
              username: account,
              password: password,
            })
            .then(({ data }) => {
              console.log(data);
              if(data.code === 200){
                Alert.alert("Notification", "Login Thanh Cong");
                navigation.navigate("Home");
              }else{
                Alert.alert("err", "eerr" + JSON.stringify(data));
              }
            })
            .catch((err) => {
              Alert.alert("err", "eerr" + err);
            });
        }}
      ></Button>
    </View>
  );
};

export default Login;
