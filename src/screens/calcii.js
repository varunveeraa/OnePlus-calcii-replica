import React , {useState} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const calcii = () => {

    let operations = ['DEL','AC','%','+','-','/','*']

    const [calcNums, setCalcNums] = useState('')
    const [resultNums, setResultNums] = useState('')
    const [historyList, setHistoryList] = useState([{}])

    var dat = new Date().getDate().toString();

    const onNumPress = (num) => {
        console.log(num)
        setCalcNums(calcNums + num)
    }
    const onOperPress = (oper) => {
        
        if(oper == 'AC') {
            setCalcNums('')
            setResultNums('')
            return
        }

        if(oper == 'DEL') {
            return setCalcNums(calcNums.toString().substring(0,calcNums.length - 1))  
        }

        if(oper == '=') {
            return setResultNums(eval(calcNums))//,
            // listAppend()
        }

        if(operations.includes(calcNums.toString().split('').pop())) return

        setCalcNums(calcNums + oper)
    }

    // const listAppend = () => {
    //     setHistoryList(historyList.push({ date: dat, calcu: calcNums.toString(), resu: eval(calcNums).toString()}))
    //     console.log(historyList)
    //}

    return(
        <View style={styles.container}>
            <View style={styles.display}>
                <View style={styles.output}>
                    <Text style={styles.outputText}>{resultNums}</Text>
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>{calcNums}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => onOperPress('AC')}>
                            <Text style={styles.num}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onOperPress('DEL')}>
                            <Image source={require('../../assets/backS.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onOperPress('%')}>
                            <Text style={styles.temp}>%</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => onNumPress(1) }>
                            <Text style={styles.num}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onNumPress(2) }>
                            <Text style={styles.num}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onNumPress(3) }>
                            <Text style={styles.num}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => onNumPress(4) }>
                            <Text style={styles.num}>4</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => onNumPress(5) }>
                            <Text style={styles.num}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onNumPress(6) }>
                            <Text style={styles.num}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => onNumPress(7) }>
                            <Text style={styles.num}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onNumPress(8) }>
                            <Text style={styles.num}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onNumPress(9) }>
                            <Text style={styles.num}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <Text style={styles.num}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onNumPress(0) }>
                            <Text style={styles.num}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onNumPress('.')}>
                            <Text style={styles.num}>.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.operations}>
                    <TouchableOpacity style={styles.operationsIcon} 
                    onPress={() => onOperPress('/')}>
                        <Text style={styles.operationsButton}>÷</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operationsIcon}
                    onPress={() => onOperPress('*')}>
                        <Text style={styles.operationsButton}>×</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operationsIcon}
                    onPress={() => onOperPress('-')}>
                        <Text style={styles.operationsButton}>−</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operationsIcon}
                    onPress={() => onOperPress('+')}>
                        <Text style={styles.operationsButton}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operationsIcon2}
                    onPress={() => onOperPress('=')}>
                        <Text style={styles.operationsButton}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 5
    },
    display : {
        flex: 3,
        backgroundColor: '#202020',
        borderRadius: 10
    },
    output: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    outputText: {
        fontSize: 75,
        color: 'white'
    },
    inputText: {
        fontSize: 35,
        color: 'white'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3
    },
    operations: {
        flex: 1,
        backgroundColor: '#0b0b0b'
    },
    icon:{
        height: 35,
        width: 40,
        marginRight: 50,
        
    },
    num: {
        color: 'white',
        fontSize: 35
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    temp: {
        fontSize: 35,
        color: 'white',
        marginLeft: -35
    },
    operationsButton: {
        fontSize: 35,
        color: 'white',
        marginLeft: 20,
        marginBottom: 5
    },
    operations: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    operationsIcon: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#404040',
        alignContent: 'center',
        justifyContent: 'center'
    },
    operationsIcon2: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#c41442',
        alignContent: 'center',
        justifyContent: 'center'
    }
})

export default calcii