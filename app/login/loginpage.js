import React from "react";
import {View,SafeAreaView,Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native'
import {Link} from 'expo-router'
import CustomInput from '../../sharedModules/components/input/input'; 
import styles from './loginpage.style'
import CustomButton from "../../sharedModules/components/button/button";
import { useRouter} from "expo-router";

const empowerVoteLogo =require('../../assets/logos/EmpowerVote.png')

const loginpage=()=>{
    const router=useRouter()
    const [userName, setUserName] = React.useState('');
    const [password,setPassword] = React.useState('')

    const handleUserNameChange = (text) => {
        setUserName(text);
    };
    const handlePasswordChange = (text) => {
        setUserName(text);
    };
    const handleLoginButton = () => {
        router.replace('../dashboard/dashboard')
      };

    return(
            <SafeAreaView style={styles.container}>
                <StatusBar  backgroundColor="#f0f0f0" barStyle="dark-content"/>
                <View style={styles.container1}>
                   <Image source={ empowerVoteLogo}></Image>
                </View>
                <View style={styles.container2}>
                    <CustomInput value={userName} placeholder="username" onChange={handleUserNameChange} /> 
                    <CustomInput value={password} placeholder="password" onChange={handlePasswordChange} />   
                </View>
                <View style={styles.container3}>
                    <View style={styles.LoginContainer}>
                        {/* <TouchableOpacity>
                            <View style={styles.loginButton}>
                                <Text style={styles.loginButtonText}><Link href='../dashboard/dashboard'>LOGIN</Link></Text>
                            </View>
                        </TouchableOpacity> */}
                        <Link href='../dashboard/dashboard'><CustomButton title="Login" onPress={handleLoginButton}  backgroundColor="#000000"/></Link>
                    </View>
                    <View style={styles.registerContainer}>
                        <TouchableOpacity>
                            <Text style={styles.register}><Link href='../createaccount/phonenum/phonenum'>Register</Link></Text>
                            <View style={styles.touchRegister}></View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgetPassword} ><Link href ='../forgetPassword/forgetpassword'>Forget Password?</Link></Text>
                            <View style={styles.touchForgetPassword}></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
    )
}
export default loginpage;


