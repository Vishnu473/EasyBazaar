import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useInfiniteCategoryItems } from '@/hooks/useInfiniteCategoryItems';
import { useTheme } from '@/themes/themes';
import { CategoryItemResponse, productItem } from '@/interfaces/types';

interface CategoryItem {
  name: string;
  url: string;
}

const categoryDetailScreen = () => {
  const { theme } = useTheme();
  const { name, url } = useLocalSearchParams<{ name: string, url: string }>();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteCategoryItems(url);

  if (isError) {
    return <Text style={{ color: 'red', padding: 16 }}>Failed to load categories.</Text>;
  }

  console.log(data);
  
  if (isLoading) {
    return <ActivityIndicator size="large" color={theme.primaryColor} style={{ margin: 16 }} />;
  }

  const renderItem = ({ item }: { item: productItem }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.productThumbnail}/>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.images.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.productImage} />
        ))}
      </ScrollView> */}

      <View style={styles.ratingContainer}>
        <Text style={styles.productRating}>Rating: {item.rating}</Text>
        <Text style={styles.productStock}>Stock: {item.stock}</Text>
      </View>

      {item.reviews && (
        <View style={styles.reviewsContainer}>
          {item.reviews.map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <Text style={styles.reviewerName}>{review.reviewerName}</Text>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <FlatList data={data?.pages.flatMap((page:any) => page.products)}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          return isFetchingNextPage ? (<ActivityIndicator size='small' color={theme.primaryColor} style={{ margin: 16 }} />) : null
        }}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  productThumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 8,
  },
  productImage: {
    width: 150,
    height: 150,
    marginRight: 8,
    borderRadius: 8,
  },
  ratingContainer: {
    marginVertical: 8,
  },
  productRating: {
    fontSize: 14,
    color: '#000',
  },
  productStock: {
    fontSize: 14,
    color: '#777',
  },
  reviewsContainer: {
    marginVertical: 8,
  },
  reviewItem: {
    marginBottom: 8,
  },
  reviewerName: {
    fontWeight: 'bold',
  },
  reviewComment: {
    fontSize: 12,
    color: '#555',
  },
});

export default categoryDetailScreen