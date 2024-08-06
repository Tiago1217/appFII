import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/images/capa.jpg')} // Caminho para a imagem local
        style={styles.capa}
      />
      <Text style={styles.titulo}>Lista de Fundos Imobiliários Mais Rentáveis</Text>
      
      <View style={styles.itemContainer}>
        <Image
          source={require('./assets/images/1.jpg')} // Caminho para a imagem local
          style={styles.image}
        />
        <Text style={styles.legenda}>BBFI11 BB Progressivo</Text>
        <View style={styles.divider} />
      </View>
      
      <View style={styles.itemContainer}>
        <Image
          source={require('./assets/images/2.jpg')} // Caminho para a imagem local
          style={styles.image}
        />
        <Text style={styles.legenda}>BDIV11 BTG Pactual Infraestrutura Dividendos</Text>
        <View style={styles.divider} />
      </View>
      
      <View style={styles.itemContainer}>
        <Image
          source={require('./assets/images/3.jpg')} // Caminho para a imagem local
          style={styles.image}
        />
        <Text style={styles.legenda}>GCRA11 Galápagos Recebíveis do Agronegócio</Text>
        <View style={styles.divider} />
      </View>
      
      <View style={styles.itemContainer}>
        <Image
          source={require('./assets/images/4.jpg')} // Caminho para a imagem local
          style={styles.image}
        />
        <Text style={styles.legenda}>BLCA11 Bluemacaw Catuí Triple A</Text>
        <View style={styles.divider} />
      </View>
      
      <View style={styles.itemContainer}>
        <Image
          source={require('./assets/images/5.jpg')} // Caminho para a imagem local
          style={styles.image}
        />
        <Text style={styles.legenda}>AAZQ11 AZ Quest FIAGRO</Text>
        <View style={styles.divider} />
      </View>
      
      <View style={styles.itemContainer}>
        <Image
          source={require('./assets/images/6.jpg')} // Caminho para a imagem local
          style={styles.image}
        />
        <Text style={styles.legenda}>LSAG11 Leste Fundo Invest CAD PROD Agroind</Text>
        <View style={styles.divider} />
      </View>
      
      <View style={styles.itemContainer}>
        <Image
          source={require('./assets/images/7.jpg')} // Caminho para a imagem local
          style={styles.image}
        />
        <Text style={styles.legenda}>PATC11 Pátria Edifícios Corporativos</Text>
        <View style={styles.divider} />
      </View>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Cor de fundo mais suave
    padding: 20, // Espaçamento ao redor do conteúdo
  },
  capa: {
    width: '100%', // Largura completa do contêiner
    height: 200, // Altura da imagem
    borderRadius: 10, // Bordas arredondadas
    marginBottom: 20, // Espaçamento abaixo da imagem
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333', // Cor do texto mais escura
    textAlign: 'center', // Alinhamento centralizado
    marginVertical: 20, // Espaçamento acima e abaixo do texto
  },
  itemContainer: {
    backgroundColor: '#fff', // Cor de fundo para cada item
    borderRadius: 5, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    marginBottom: 20, // Espaçamento entre os itens
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Offset da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 1, // Elevação (sombra) para Android
  },
  legenda: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555', // Cor do texto mais clara
    textAlign: 'center', // Alinhamento centralizado
    marginTop: 10, // Espaçamento acima do texto
  },
  image: {
    width: '100%', // Largura completa do contêiner
    height: 150, // Altura da imagem
    borderRadius: 10, // Bordas arredondadas
  },
  divider: {
    width: '100%', // Largura completa do contêiner
    height: 1,    // Espessura da linha
    backgroundColor: '#ddd', // Cor da linha
    marginVertical: 10, // Espaçamento acima e abaixo da linha
  },
});
