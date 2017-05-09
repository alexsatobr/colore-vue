<template>
	<section id="sec2" class="section">
	    <form id="frmRegistro">

	      <div class="form-group input-group">
	        <span class="input-group-addon" id="basic-addon2">@</span>
	        <input id="txtEmail2" v-model="email" type="text" class="form-control" placeholder="Insira o seu email" aria-describedby="basic-addon2">
	      </div>

	      <div class="form-group input-group">
	        <span class="input-group-addon" id="basic-addon1">Senha</span>
	        <input id="txtPassword2" v-model="password" type="text" class="form-control" placeholder="Insira sua senha" aria-describedby="basic-addon1">
	      </div>

	      <div class="form-group input-group">
	        <span class="input-group-addon" id="basic-addon1">Nome</span>
	        <input id="txtNome" type="text" v-model="nome" class="form-control" placeholder="Insira o seu nome" aria-describedby="basic-addon1">
	      </div>

	      <div class="form-group input-group">
	        <span class="input-group-addon" id="basic-addon1">Sobrenome</span>
	        <input id="txtSobrenome" type="text" v-model="sobrenome" class="form-control" placeholder="Insira o seu sobrenome" aria-describedby="basic-addon1">
	      </div>

	      <div class="form-group input-group">
	        <span class="input-group-addon" id="basic-addon2">Data de Nasc.</span>
	        <input id="txtNasc" type="text" v-model="data_nasc" class="form-control" placeholder="Insira a sua data de nascimento" aria-describedby="basic-addon2">
	      </div>

	      <div class="form-group input-group">
	        <span class="input-group-addon" id="basic-addon2">Escola</span>
	        <input id="txtEscola" type="text" v-model="escola" class="form-control" placeholder="Insira a sua escola" aria-describedby="basic-addon2">
	      </div>



	      <button id="btnRegistrar" @click.prevent="cadastrarUser" type="submit" class="btn btn-default">Registrar</button>
	      <button id="btnVoltar" @click="voltar" type="button" class="btn btn-default">Voltar</button>

	    </form>
  	</section>
</template>

<script>
	import {db} from './firebase';
	import {usersRef} from './firebase';

	export default {
		firebase: {
			users: usersRef
		},
		data (){
			return {

				email: '',
				password: '',
				nome: '',
				sobrenome: '',
				data_nasc: '',
				escola: '',
			}
		},

		methods: {
			voltar: function(){
				this.$router.push('/');
			},
			cadastrarUser: function(){
				const email = this.email;
				const password = this.password;
				const nome = this.nome;
				const sobrenome = this.sobrenome;
				const data_nasc = this.data_nasc;
				const escola = this.escola;

				const auth = firebase.auth();
				var user;
	      const promise = auth.createUserWithEmailAndPassword(this.email, this.password);
				promise.then(function(user){
					usersRef.child(user.uid).set(
						{
							nome: nome,
							sobrenome: sobrenome,
							email: email,
							escola: escola,
							data_nasc: data_nasc,
							pass: password,
							uid: user.uid,

						}
					);

				}).catch(e => console.log(e.message));

				// const userUid = firebase.auth().currentUser.uid;




		     	console.log('foi');
			}
		}
	}
</script>
