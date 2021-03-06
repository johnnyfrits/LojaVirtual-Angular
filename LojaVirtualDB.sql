USE [master]
GO
/****** Object:  Database [LojaVirtual]    Script Date: 06/09/2021 15:54:23 ******/
CREATE DATABASE [LojaVirtual]
GO

USE [LojaVirtual]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 06/09/2021 15:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[CPF] [bigint] NOT NULL,
	[Address] [varchar](50) NULL,
	[Number] [varchar](10) NULL,
	[Neighborhood] [varchar](50) NULL,
	[City] [varchar](50) NULL,
	[State] [varchar](2) NULL,
	[ZipCode] [bigint] NULL,
	[Phone] [bigint] NULL,
	[Email] [varchar](100) NULL,
	[Birth] [date] NULL,
 CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 06/09/2021 15:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NOT NULL,
	[Date] [datetime] NOT NULL,
 CONSTRAINT [PK_Pedidos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderItem]    Script Date: 06/09/2021 15:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderItem](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Price] [decimal](18, 2) NULL,
	[Quantity] [decimal](18, 3) NULL,
	[Total] [decimal](18, 2) NULL,
 CONSTRAINT [PK_PedidosItens] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 06/09/2021 15:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[Price] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Produtos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (1, N'Benedito Theo Barbosa', 32228496251, N'Rua Bulgária', N'778', N'Nova Cidade', N'Manaus', N'AM', 69097465, 92993160201, N'beneditotheobarbosa..beneditotheobarbosa@gruporeis.net', CAST(N'1991-08-09' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (2, N'Eloá Marina Mariah Ramos', 20751454230, N'Travessa Igaraçu', N'157', N'Novo Aleixo', N'Manaus', N'AM', 69099066, 92993135503, N'eloamarinamariahramos_@ctfmgacc.org.br', CAST(N'1991-02-25' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (3, N'Vitória Flávia Ferreira', 72494850240, N'Rua Reino Unido', N'158', N'Ponta Negra', N'Manaus', N'AM', 69037135, 92994825786, N'vitoriaflaviaferreira..vitoriaflaviaferreira@gasparalmeida.com', CAST(N'1991-04-07' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (4, N'Daiane Priscila Carolina da Luz', 18256414200, N'Rua Comendador Vicente Cruz', N'821', N'Santo Antônio', N'Manaus', N'AM', 69029075, 92983676073, N'daianepriscilacarolinadaluz..daianepriscilacarolinadaluz@tasaut.com.br', CAST(N'1991-10-05' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (5, N'Leonardo Hugo da Costa', 5031792213, N'Beco Júlio de Lima', N'691', N'Flores', N'Manaus', N'AM', 69058814, 92995401943, N'lleonardohugodacosta@bool.com.br', CAST(N'1991-07-10' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (6, N'Sebastiana Beatriz Manuela Silveira', 60714723266, N'Rua Joaquim Nunes', N'644', N'Japiim', N'Manaus', N'AM', 69076760, 92998950759, N'sebastianabeatrizmanuelasilveira__sebastianabeatrizmanuelasilveira@bodyfast.com.br', CAST(N'1991-12-14' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (7, N'Vinicius Sérgio de Paula', 56451527270, N'Rua Paraíso do Tocantins', N'618', N'Monte das Oliveiras', N'Manaus', N'AM', 69093701, 92987478881, N'viniciussergiodepaula-88@technocut.com.br', CAST(N'1991-03-03' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (8, N'Gustavo Noah Rocha', 90675453259, N'Rua dos Bronzes', N'790', N'Jorge Teixeira', N'Manaus', N'AM', 69088324, 92987875517, N'gustavonoahrocha..gustavonoahrocha@dominiozeladoria.com.br', CAST(N'1991-08-18' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (9, N'Diogo Pedro Monteiro', 80767229266, N'Rua São Geraldo', N'380', N'São Geraldo', N'Manaus', N'AM', 69053370, 92987473507, N'diogopedromonteiro-98@ne.com', CAST(N'1991-08-13' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (10, N'Rodrigo Isaac Martins', 44218953260, N'Travessa Palmeira das Missões', N'759', N'São José Operário', N'Manaus', N'AM', 69086113, 92986856398, N'rrodrigoisaacmartins@lojabichopapao.com.br', CAST(N'1991-01-20' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (11, N'Benedita Patrícia da Rocha', 70549002278, N'Beco Sertão', N'186', N'Aleixo', N'Manaus', N'AM', 69060631, 92997464855, N'beneditapatriciadarocha_@powerblade.com.br', CAST(N'1991-04-27' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (12, N'Bernardo Calebe José da Paz', 70544283236, N'Avenida Frederico Baird', N'528', N'Ponta Negra', N'Manaus', N'AM', 69037144, 92998532971, N'bbernardocalebejosedapaz@sabereler.com.br', CAST(N'1991-08-21' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (13, N'Marcela Clarice Jesus', 38113442260, N'Rua Urânio', N'114', N'Cidade de Deus', N'Manaus', N'AM', 69099219, 92987277670, N'marcelaclaricejesus__marcelaclaricejesus@htomail.com', CAST(N'1991-12-05' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (14, N'Henry Noah Martin Almada', 92464241237, N'Rua Francisca Mendes', N'687', N'Cidade Nova', N'Manaus', N'AM', 69097280, 92989669298, N'henrynoahmartinalmada__henrynoahmartinalmada@bol.br', CAST(N'1991-10-05' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (15, N'Thales Cláudio Manuel da Conceição', 19675504250, N'Avenida Nathan Xavier de Albuquerque', N'552', N'Novo Aleixo', N'Manaus', N'AM', 69098145, 92991116273, N'thalesclaudiomanueldaconceicao-90@torrez.com.br', CAST(N'1991-07-09' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (16, N'Enrico Henrique da Rosa', 27638891236, N'Rua Ronaldo Carvalho', N'921', N'São Raimundo', N'Manaus', N'AM', 69029570, 92985445366, N'enricohenriquedarosa_@fojsc.unesp.br', CAST(N'1991-09-25' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (17, N'César Raul Severino Pires', 32386740218, N'Rua Hermes da Fonseca', N'460', N'Dom Pedro I', N'Manaus', N'AM', 69040050, 92995602951, N'ccesarraulseverinopires@alphagraphics.com.br', CAST(N'1991-03-01' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (18, N'Antonio Elias Raul da Cruz', 55501631288, N'Rua 1º de Março', N'113', N'Gilberto Mestrinho', N'Manaus', N'AM', 69006292, 92982227745, N'aantonioeliasrauldacruz@alstom.com', CAST(N'1991-11-15' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (19, N'Antonella Bruna Ferreira', 97419787239, N'Rua Dorabela', N'309', N'Santa Etelvina', N'Manaus', N'AM', 69059461, 92981074058, N'antonellabrunaferreira..antonellabrunaferreira@gasparalmeida.com', CAST(N'1991-03-04' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (20, N'Leandro Bernardo Assunção', 68579219205, N'Beco Jesus Salvador', N'271', N'Coroado', N'Manaus', N'AM', 69082631, 92991284216, N'leandrobernardoassuncao__leandrobernardoassuncao@globomail.com', CAST(N'1991-08-17' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (21, N'Amanda Rita Moraes', 2404356216, N'Rua Doutor Mendonça', N'108', N'Parque 10 de Novembro', N'Manaus', N'AM', 69055140, 92997391629, N'aamandaritamoraes@ouplook.com', CAST(N'1991-05-01' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (22, N'Márcia Olivia da Luz', 15399206234, N'Beco Bom Jesus', N'898', N'São José Operário', N'Manaus', N'AM', 69086563, 92989900193, N'marciaoliviadaluz__marciaoliviadaluz@casaarte.com.br', CAST(N'1991-06-12' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (23, N'Carolina Regina Priscila Lima', 24624625200, N'Rua Barbosa Machado', N'251', N'Cidade Nova', N'Manaus', N'AM', 69097163, 92982175743, N'carolinareginapriscilalima__carolinareginapriscilalima@vemter.com.br', CAST(N'1991-07-09' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (24, N'Samuel Marcelo Souza', 23445192200, N'Rua Manaus', N'583', N'Colônia Terra Nova', N'Manaus', N'AM', 69093493, 92996112246, N'samuelmarcelosouza_@tpltransportes.com.br', CAST(N'1991-01-09' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (25, N'Yago Cláudio Freitas', 97959081204, N'Rua Bérgano', N'727', N'Nova Cidade', N'Manaus', N'AM', 69097335, 92998463097, N'yagoclaudiofreitas_@caocarinho.com.br', CAST(N'1991-03-08' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (26, N'Sebastião Pedro Monteiro', 2286826226, N'Rua das Andorinhas', N'521', N'Cidade de Deus', N'Manaus', N'AM', 69099418, 92982422767, N'sebastiaopedromonteiro..sebastiaopedromonteiro@hotmail.fr', CAST(N'1991-01-23' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (27, N'Kaique Heitor Nogueira', 46951288291, N'Rua 10', N'401', N'Cidade Nova', N'Manaus', N'AM', 69090865, 92997967176, N'kkaiqueheitornogueira@patrezao.com.br', CAST(N'1991-07-02' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (28, N'Isabela Débora Vieira', 9479150280, N'Rua Pérola', N'848', N'Cidade de Deus', N'Manaus', N'AM', 69099218, 92998843751, N'iisabeladeboravieira@pmm.am.gov.br', CAST(N'1991-12-04' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (29, N'Gustavo Marcos Vinicius Rezende', 38927454200, N'Rua Cambuci', N'475', N'Cidade Nova', N'Manaus', N'AM', 69097420, 92987424374, N'gustavomarcosviniciusrezende__gustavomarcosviniciusrezende@proshock.com.br', CAST(N'1991-02-12' AS Date))
INSERT [dbo].[Customer] ([Id], [Name], [CPF], [Address], [Number], [Neighborhood], [City], [State], [ZipCode], [Phone], [Email], [Birth]) VALUES (30, N'Mirella Rayssa Ribeiro', 81034561286, N'Beco Flor Azul', N'550', N'Educandos', N'Manaus', N'AM', 69070562, 92986453927, N'mirellarayssaribeiro-82@paulistadovale.org.br', CAST(N'1991-02-15' AS Date))
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
SET IDENTITY_INSERT [dbo].[Order] ON 

INSERT [dbo].[Order] ([Id], [CustomerId], [Date]) VALUES (2, 19, CAST(N'2021-08-28T10:45:04.073' AS DateTime))
INSERT [dbo].[Order] ([Id], [CustomerId], [Date]) VALUES (1002, 18, CAST(N'2021-08-28T15:45:28.987' AS DateTime))
SET IDENTITY_INSERT [dbo].[Order] OFF
GO
SET IDENTITY_INSERT [dbo].[OrderItem] ON 

INSERT [dbo].[OrderItem] ([Id], [OrderId], [ProductId], [Price], [Quantity], [Total]) VALUES (2, 2, 10, CAST(1350.00 AS Decimal(18, 2)), CAST(1.000 AS Decimal(18, 3)), CAST(1350.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderItem] ([Id], [OrderId], [ProductId], [Price], [Quantity], [Total]) VALUES (3, 2, 4, CAST(99.90 AS Decimal(18, 2)), CAST(1.000 AS Decimal(18, 3)), CAST(99.90 AS Decimal(18, 2)))
INSERT [dbo].[OrderItem] ([Id], [OrderId], [ProductId], [Price], [Quantity], [Total]) VALUES (4, 2, 11, CAST(459.00 AS Decimal(18, 2)), CAST(1.000 AS Decimal(18, 3)), CAST(459.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderItem] ([Id], [OrderId], [ProductId], [Price], [Quantity], [Total]) VALUES (5, 2, 2, CAST(4500.00 AS Decimal(18, 2)), CAST(1.000 AS Decimal(18, 3)), CAST(4500.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderItem] ([Id], [OrderId], [ProductId], [Price], [Quantity], [Total]) VALUES (6, 2, 5, CAST(388.00 AS Decimal(18, 2)), CAST(1.000 AS Decimal(18, 3)), CAST(388.00 AS Decimal(18, 2)))
INSERT [dbo].[OrderItem] ([Id], [OrderId], [ProductId], [Price], [Quantity], [Total]) VALUES (1002, 1002, 9, CAST(450.00 AS Decimal(18, 2)), CAST(1.000 AS Decimal(18, 3)), CAST(450.00 AS Decimal(18, 2)))
SET IDENTITY_INSERT [dbo].[OrderItem] OFF
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (1, N'Impressora HP', CAST(1350.99 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (2, N'Notebook', CAST(4500.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (3, N'Monitor Dell', CAST(500.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (4, N'Mouse gamer', CAST(99.90 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (5, N'Teclado Gamer Redragon', CAST(388.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (6, N'Smartphone Galaxy S20+', CAST(3599.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (7, N'Ar condicionado 9.000 BTUs', CAST(1250.99 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (8, N'TV Samsung 50 polegadas', CAST(2990.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (9, N'Mesa de escritório', CAST(450.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (10, N'Cadeira gamer', CAST(1350.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (11, N'Mouser Pad', CAST(459.00 AS Decimal(18, 2)))
INSERT [dbo].[Product] ([Id], [Name], [Price]) VALUES (1006, N'Celular1', CAST(10.50 AS Decimal(18, 2)))
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customer] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_Customer]
GO
ALTER TABLE [dbo].[OrderItem]  WITH CHECK ADD  CONSTRAINT [FK_OrderItem_Order] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Order] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderItem] CHECK CONSTRAINT [FK_OrderItem_Order]
GO
ALTER TABLE [dbo].[OrderItem]  WITH CHECK ADD  CONSTRAINT [FK_OrderItem_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[OrderItem] CHECK CONSTRAINT [FK_OrderItem_Product]
GO
USE [master]
GO
ALTER DATABASE [LojaVirtual] SET  READ_WRITE 
GO
