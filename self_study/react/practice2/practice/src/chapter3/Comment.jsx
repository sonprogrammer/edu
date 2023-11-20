import React from "react";

function Comment(props) {
    return(
        <div style = {sytles.wrapper}>
            <div style ={sytles.imageContainer}>
                <img 
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjdfOTIg%2FMDAxNjA5MDY5Nzk3ODU2.Oxt3FhNd6LGkegeyXy14LNLeIfbXhWqK5olkpQOqIrog.R_tKiBbddGNW9QsHU3iCGU2jYbAbCfwhATOTOZVotN0g.PNG.sosohan_n%2Fwe_%25281%2529.png&type=a340" 
                    style={sytles.image}
                    />
            </div>
            <div style={sytles.contentContainer}>
                <span style={sytles.nameText}>{props.name}</span>
                <span style={sytles.commentText}>
          {props.comment}
                </span>
            </div>
        </div>
    )
}

export default Comment

const sytles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid grey',
        borderRadius:16,
    },
    imageContainer:{},
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    commentText:{
        color: 'black',
        fontSize: 16,
    }

}