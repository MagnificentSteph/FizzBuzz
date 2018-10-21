const gameButtonStyle = theme => ({
  button: {
    margin: theme.spacing.unit,
    letterSpacing: '0.2em',
    fontWeight: '700',
    fontSize: "1em",
    backgroundColor: '#b082b0',
    height: '10em',
    width: '10em',
    '&:hover': {
        backgroundColor: '#b082b0',
        borderColor: '#828db0',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#828db0',
        borderColor: '#b082b0',
    }
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  }
});

export default gameButtonStyle
