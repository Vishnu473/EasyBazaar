import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTheme } from '@/themes/themes'
import { fetchCategories } from '@/services/apiService';
import { CategoryList } from '@/interfaces/types';
import { useRouter } from 'expo-router';

export default function CategorychipList() {
  const {theme} = useTheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const {data, isLoading, isError} = useQuery<CategoryList[]>({
    queryKey:['categories'],
    queryFn:fetchCategories
  })

  if (isLoading) {
    return <ActivityIndicator size="small" color={theme.primaryColor} style={{ margin: 16 }} />;
  }

  if (isError) {
    return <Text style={{ color: 'red', padding: 16 }}>Failed to load categories.</Text>;
  }
  return (
    <FlatList data={data}
    keyExtractor={(item) => item.name}
    horizontal
    contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 8 }}
    showsHorizontalScrollIndicator={true}
    renderItem={({item}) => {
        const isSelected = item.name === selectedCategory;
        return (
            <TouchableOpacity
              onPress={() => {
                setSelectedCategory(item.name)
                router.push({
                  pathname:`/category/${item.name}`,
                  params:{
                    url:item.url
                  }
                });
              }}
              style={{
                borderColor:isSelected ? theme.primaryColor : theme.borderColor,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 20,
                marginRight: 10,
                borderWidth:1,
                backgroundColor: isSelected ? theme.primaryColor : "#ededed",
              }}>
                <Text style={{color: isSelected ? theme.backgroundColor : theme.textColor}}>{item.name}</Text>
            </TouchableOpacity>
        );
    }}/>
  )
}

const styles = StyleSheet.create({})