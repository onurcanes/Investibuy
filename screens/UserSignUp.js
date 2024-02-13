import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import {auth} from '../firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const UserSignUp = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [showDate, setShowDate] = useState(false);
  const navigation = useNavigation();

  const onChangeDate = (event, selectedDate) => {
    setDate(selectedDate);
    setShowDate(false);
  };
  const onChangeMode = (selectedMode) => {
    setShowDate(true);
    setMode(selectedMode);
  };

  const validation = Yup.object().shape({
    name : Yup.string().required('Isim alanı boş bırakılmamalıdır!'),
    surname : Yup.string().required('Soyisim alanı boş bırakılmamalıdır!'),
    email : Yup.string().required('Email alanı boş bırakılmamalıdır!').email('Email formatına uygun giriş yapınız!'),
    passw : Yup.string().required('Şifre alanı zorunludur!').min(6 , 'Minimum 6 karakter giriniz'),
});
    const [values1 , setValues1] = useState(false);
    let [name , setName] = useState('');
    let [surname , setSurname] = useState('');
    let [email , setEmail] = useState('');
    let [passw , setPassw] = useState('');
    const [data , setData] = useState('');
  

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        passw: "",
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        const name = values.name;
        const surname = values.surname;
        const email  = values.email;
        const pass = values.passw;
        if(values1 === true){
          createUserWithEmailAndPassword(auth , email , pass)
        .then((userCredential) => {
          const userProfile = userCredential.user;
          Alert.alert('Üyelik başarıyla oluşturulmuştur!');
          navigation.navigate('Sign');
        })
        }
        else{
          Alert.alert('Please accept terms')
        }
      }}
    >
      {({ handleChange, handleSubmit, values , errors }) => (
        <>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
              backgroundColor:'#312f30',
              flex:1,
              marginTop:-50
            }}
          >
            <Image source={require('../assets/title.png')}  style={{width:300, height:50,marginTop:-60}}/>
            <Image
              source={require("../assets/register.png")}
              style={{ width: 120, height: 120 }}
            />
            <TextInput
              placeholder="Name : "
              style={styles.input}
              onChangeText={handleChange("name")}
              value={values.name}
            />
            {
              errors.name && <Text style={{fontSize:15,color:'white'}}>{errors.name}</Text>
            }
            <TextInput
              placeholder="Surname : "
              style={styles.input}
              onChangeText={handleChange("surname")}
              value={values.surname}
            />
               {
              errors.surname && <Text style={{fontSize:15, color:'white'}}>{errors.surname}</Text>
            }
            <TextInput
              placeholder="Email : "
              style={styles.input}
              onChangeText={handleChange("email")}
              value={values.email}
            />
               {
              errors.email && <Text style={{fontSize:15,color:'white'}}>{errors.email}</Text>
            }
            <TextInput
              placeholder="Password : "
              style={styles.input}
              secureTextEntry
              onChangeText={handleChange("passw")}
              value={values.passw}
            />
               {
              errors.passw && <Text style={{fontSize:15,color:'white'}}>{errors.passw}</Text>
            }
            <View>
              <TouchableOpacity onPress={() => {
                setMode('date');
                setShowDate(true);
              }}>
                <View style={styles.btn}>
                  <Text
                    style={{
                      color: "white",
                      justifyContent: "center",
                      textAlign: "center",
                      marginTop: 9,
                      fontSize: 17,
                      fontWeight:'bold'
                    }}
                  >
                    Choose Birthday
                  </Text>
                </View>
              </TouchableOpacity>
              {showDate && (
                <View style={{marginRight:100, paddingVertical:10}}>
                <DateTimePicker
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChangeDate}
                  style={{color : 'white'}}
                />
                </View>
              )}
            </View>
            <View>
            <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.btnregister}>
            <Text style={{color : 'white', justifyContent:'center', textAlign:'center',marginTop:8, fontSize:17, fontWeight:'bold'}}>Register</Text>
            </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginTop:15}}>
          <Switch value={values1} onValueChange={setValues1} />
          <Text style={{color:'white', marginLeft:10, marginTop:7}}>I accept the terms in the license agreement</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Sign') }>
          <Text style={{color : 'white', fontSize:17, marginLeft:115,marginTop:20}}>Already sign in</Text>
        </TouchableOpacity>
            </View>
          </View>
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
    marginTop: 8,
    borderRadius: 30,
    fontSize: 17,
    paddingLeft: 10,
    shadowRadius:3
  },
  btn: {
    width: 300,
    height: 40,
    backgroundColor: "#00579a",
    borderRadius: 30,
    marginTop: 12,
  },
  btnregister : {
    width: 300,
    height: 40,
    backgroundColor: "#00579a",
    borderRadius: 30,
    marginTop: 12,
    marginLeft:20

  }
});
