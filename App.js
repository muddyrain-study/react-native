import {
  View,
  FlatList,
  Dimensions,
  Text,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { queryMovies, randomRefreshMovies } from './data/service';
import MovieItemCell from './MovieItemCell';
import moviesData from './data/movies.json';
export const width = Dimensions.get('window').width;
let currentPage = 1;
let pageSize = 10;
let totalPage = Math.ceil(moviesData.length / pageSize);

import React, { useEffect, useState } from 'react';
const App = () => {
  // 初始化电影数据
  const data = queryMovies();
  // 初始化电影列表和加载状态
  const [movieList, setMovieList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [isHeaderRefreshing, setIsHeaderRefreshing] = useState(false);
  const [isFooterRefreshing, setIsFooterRefreshing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMovieList(data);
      setLoaded(true);
    }, 1000);
  }, []);

  // 渲染标题
  function renderTitle() {
    return (
      <View style={styles.bayStyle}>
        <Text style={styles.txtStyle}>电影列表</Text>
      </View>
    );
  }

  // 渲染加载条
  function renderLoad() {
    if (!loaded) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} size='small' />
          <Text style={{ color: '#666666', paddingLeft: 10 }}>努力加载中</Text>
        </View>
      );
    }
  }

  // 下拉刷新

  function beginHeaderRefreshing() {
    console.log('下拉刷新了');
    setIsHeaderRefreshing(true);
    const newMovie = randomRefreshMovies();
    const data = [...newMovie, ...movieList];
    setTimeout(() => {
      setMovieList(data);
      setIsHeaderRefreshing(false);
    }, 1000);
  }
  // 上拉加载
  function beginFooterRefreshing() {
    console.log('上拉加载了');
    setIsFooterRefreshing(true);
    if (currentPage < totalPage) {
      currentPage++;
      const newMovie = queryMovies(currentPage, pageSize).slice();
      const data = [...movieList, ...newMovie];
      setTimeout(() => {
        setMovieList(data);
        setIsFooterRefreshing(false);
      }, 1000);
    }
  }

  // 渲染电影列表
  function renderList() {
    return (
      <FlatList
        data={movieList}
        renderItem={({ item }) => (
          <MovieItemCell
            movie={item}
            onPress={() => {
              alert('点击的电影名称:' + item.title);
            }}
          />
        )}
        refreshing={isHeaderRefreshing}
        onRefresh={beginHeaderRefreshing}
        onEndReached={beginFooterRefreshing}
        onEndReachedThreshold={0.5}
        keyExtractor={item =>
          item.id + new Date().getTime() + Math.floor(Math.random() * 100)
        }
      />
    );
  }
  function renderFooterLoad() {
    return (
      <>
        {isFooterRefreshing && (
          <View style={styles.footerStyle}>
            <ActivityIndicator animating={true} size='small' />
            <Text style={{ color: '#666666', paddingLeft: 10 }}>
              努力加载中
            </Text>
          </View>
        )}
      </>
    );
  }
  return (
    <View style={styles.flex}>
      {renderTitle()}
      {renderLoad()}
      {renderList()}
      {renderFooterLoad()}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#268dcd',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  bayStyle: {
    height: 58,
    marginTop: 40,
    width: width,
    justifyContent: 'center',
    backgroundColor: '#268dcd',
  },
  txtStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  footerStyle: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
