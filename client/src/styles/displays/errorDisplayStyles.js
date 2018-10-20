const errorDisplayStyle = {
  marginTop: "10em",
  fontSize: "2em",
  fontFamily: "sans-serif",
  letterSpace: "0.1em",
  display: "flex",
  justifyContent: "center"
}

const errorDisplayCard = theme => ({
  root: {
    ...theme.mixins.gutters(),
    width: '20%',
    paddingTop: "1em",
    paddingBottom: "1em"
  },
});


export { errorDisplayStyle, errorDisplayCard }
