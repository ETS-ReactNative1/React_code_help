
import SearchBar from './SearchBar';
import { View } from 'react-native';
 import ResultDisplay from './ResultDisplay';



function Feed() {

  
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center',backgroundColor: 'black',color: 'white' }}>
        <SearchBar/>
        <ResultDisplay />
    </View>
  );
}

export default Feed;
