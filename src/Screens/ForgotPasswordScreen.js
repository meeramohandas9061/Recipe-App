import react, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Alert,
} from "react-native";
import { auth } from "../Services/Firebase";
import { Ionicons } from "@expo/vector-icons";
import { shadowProp, theamColor } from "../Utils/Global";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  console.log(email);

  const createAlert = (errorTitle, errorMessage) =>
    Alert.alert(errorTitle, errorMessage, [
      {
        text: "Ok",
        onPress: () => navigation.navigate("LoginScreen"),
        style: "cancel",
      },
    ]);

  const resetPassword = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        createAlert("Success", "Password reset link is sent to " + email);
        setEmail("");
      })
      .catch((error) => {
        if (error.code === "auth/missing-email") {
          console.log("That email address is missing!");
          alert("Email field can't be empty.");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          alert("Please enter a valid email.");
        }

        if (error.code === "auth/user-not-found") {
          console.log("User not found");
          alert("User not found.");
        }

        console.error(error);
      });
  };

  const handlePasswordReset = () => {
    try {
      resetPassword();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot password </Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
        clearButtonMode="always"
      />
      <View style={[styles.registerButtonView, styles.shadowProp]}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handlePasswordReset}
        >
          <Text style={styles.buttonText}>Send email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  textInputStyle: {
    fontSize: 16,
    borderWidth: 1,
    width: Dimensions.get("window").width - 50,
    borderColor: "#000000",
    height: 50,
    borderRadius: 25,
    padding: 10,
    margin: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  registerButtonView: {
    marginTop: 10,
  },
  buttonStyle: {
    width: 250,
    height: 50,
    backgroundColor: "#FFAC1C",
    borderRadius: 25,
    paddingTop: 10,
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
    paddingTop: 2,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
});

export default ForgotPasswordScreen;
