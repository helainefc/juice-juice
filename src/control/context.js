import React, { Component } from 'react'
import Client from "./contentful"


const JuiceContext = React.createContext();
class JuiceProvider extends Component {
    state = {
        juices: [],
        featuredJuices: [],
        sortedJuices:[],
        type:'Todos',
        ingredients:'Todos',
        loading: true
    };

    //getData 
    getData = async() =>{
        try {
            let response = await Client.getEntries({
               content_type: "juiceJuice",
               order:"sys.createdAt"
              // order:"fields.name"
            });
            let juices = this.formatData(response.items);
            let featuredJuices = juices.filter(juice =>juice.featured === true);
            this.setState({
                juices,
                featuredJuices,
                sortedJuices:juices,
                loading: false
            });


        } catch (error) {
            console.log(error);
        }
    }
    //get single juice
    getJuice = (slug) => {
        let temJuices = [...this.state.juices];
        const juice = temJuices.find((juice)=>juice.slug === slug);
        return juice;
    }
    //format data
    formatData(items){
        let temItems = items.map(item =>{
            let id = item.sys.id;
            let image = item.fields.image.fields.file.url;
            let juices = {...item.fields, image,id}
            return juices;
        });
        return temItems;
    }

    componentDidMount(){
        this.getData();
    }
 
    handleChange = event => {
        const target = event.target
        const name = event.target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]:value
        },
           this.filterJuices
        );
    };

    filterJuices = () =>{
        let {juices,type,ingredients} = this.state
        //All juices
        let temJuices = [...juices];
        //Filter by type
        if(type !=='Todos'){
            temJuices = temJuices.filter(juice => juice.type === type)
        };
        //Filter by ingredient
        if(ingredients !=='Todos'){
            temJuices = temJuices.filter(juice => !juice.ingredients.indexOf(ingredients))
        };
        this.setState({
            sortedJuices: temJuices
        })
    }

    //render
    render(){
        return (
            <JuiceContext.Provider value={{...this.state,
                getJuice:this.getJuice, handleChange: this.handleChange
            }}>
            {this.props.children}
            </JuiceContext.Provider>
        )
    }
}

const JuiceConsumer = JuiceContext.Consumer;

export function withJuiceConsumer(Component){
    return function ConsumerWrapper(props) {
        return <JuiceConsumer>
            {value => <Component{...props} context={value}/>};
        </JuiceConsumer>
    }
}

export { JuiceProvider, JuiceConsumer, JuiceContext }