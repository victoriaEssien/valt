import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-5 my-6">
          <Text className="text-2xl font-psemibold text-primary-600 text-left leading-[42px]">Create your Valt account</Text>
          <Text className="text-base font-rregular text-primary-500 leading-7 mb-8">Sign up to securely manage your PINs, wallet addresses, and secret keys with ease.</Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-6"
           />

          <FormField 
            title="Email Address"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-6"
            keyboardType="email-address"
           />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
           />

           <CustomButton 
              title="Log in"
              handlePress={submit}
              containerStyles='mt-10'
              isLoading={isSubmitting}
            />

            <View className="pt-10 justify-center items-center flex-row gap-2">
              <Text className="text-base text-primary-500 font-rregular text-center">Already have an account?</Text>
              <Link href='/sign-in' className='text-[17px] text-accent-600 font-rbold'>Log in</Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp