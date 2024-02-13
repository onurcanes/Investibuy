import { Formik } from "formik";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  Button,
} from "react-native";
import * as Yup from "yup";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword , sendPasswordResetEmail, onAuthStateChanged} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {collection , addDoc} from 'firebase/firestore';
import { db } from "../firebaseConfig"


const validation = Yup.object().shape({
  email: Yup.string()
    .email("Email formatı uygun değildir")
    .required("Email alanı gereklidir."),
  passw: Yup.string().required("Şifre alanı gereklidir."),
});


export const UserSign = () => {
  const [mail , setMail] = useState('');
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{
        email: "",
        passw: "",
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        const mmail = values.email;
        setMail(mmail);
        const ppas = values.passw;
        signInWithEmailAndPassword(auth , mmail , ppas)
        .then((userCredential) => {
          const userProfile = userCredential.user;
          Alert.alert('Giriş başarıyla sağlandı.');
          navigation.navigate('Enterside');
        })
        .catch(err => Alert.alert('Kullanıcı adı veya şifre hatalı!'))
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <>
          <ImageBackground
            source={require("../assets/ground3.jpg")}
            style={{ flex: 1 }}
          >
            <View style={{ justifyContent: "center", alignItems: "center", marginTop:-30 }}>
              <View style={{marginLeft:40, marginTop:50}}>
                <Image source={require('../assets/title.png')} style={{width:300, height:100}} />
                <Image source={require('../assets/invest.png')} style={{width:35, height:35, tintColor:'#fca102',marginTop:-69,}} />
              </View>
              <View style={{ marginTop: 50, marginLeft:20 }}>
                <Image
                  source={require("../assets/userIcon.png")}
                  style={{ width: 150, height: 150 }}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginRight: 230,
                  fontSize: 17,
                }}
              >
                Email{" "}
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {errors.email && (
                <Text style={{ fontSize: 15, color: "white" }}>
                  {errors.email}
                </Text>
              )}
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginRight: 200,
                  fontSize: 17,
                }}
              >
                Password{" "}
              </Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={handleChange("passw")}
                value={values.passw}
              />
              {errors.passw && (
                <Text style={{ fontSize: 15, color: "white" }}>
                  {errors.passw}
                </Text>
              )}
              <TouchableOpacity onPress={() => {
                   handleSubmit();
              }}>
                <View style={styles.btn}>
                  <Text
                    style={{
                      color: "white",
                      justifyContent: "center",
                      textAlign: "center",
                      marginTop: 8,
                      fontSize: 17,
                      fontWeight:'bold'
                    }}
                  >
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize:13
                }}>If you have an account , sign in here</Text>
                 
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <View style={styles.btn}>
                  <Text
                    style={{
                      color: "white",
                      justifyContent: "center",
                      textAlign: "center",
                      marginTop: 8,
                      fontSize: 17,
                      fontWeight:'bold'
                    }}
                  >
                    Sign Up
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize:13
                }}>If you don't have an account , you can register here</Text>
                <View style={{marginTop:50}}>
               <TextInput style={styles.input} placeholder=" Email : " onChangeText={(text) => setMail(text)} />
               <TouchableOpacity onPress={()=> {
                   sendPasswordResetEmail(auth , mail)
                   .then(() => {
                       Alert.alert('Şifre yenileme e-postası gönderilmiştir.');
                                      })
                   .catch(err => console.log(err))
               }}>
                <View style={styles.btn}>
                  <Text style={{
                    color: "white",
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: 8,
                    fontSize: 17,
                    fontWeight:'bold'
                  }}>I Forgot My Password</Text>
                </View>
               </TouchableOpacity>
               </View>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 85,
                  marginTop: 70,
                }}
              >
                This app created by Onur Can Esin
              </Text>
            </View>
          </ImageBackground>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#D5E4CF",
    borderWidth: 0.9,
    marginTop: 4,
    borderRadius: 30,
    fontSize: 17,
    paddingLeft: 10,
  },
  btn: {
    width: 300,
    height: 40,
    backgroundColor: "#00579a",
    borderRadius: 30,
    marginTop: 20,
  },
});
