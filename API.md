# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Bar <a name="Bar" id="cdk-bar.Bar"></a>

#### Initializers <a name="Initializers" id="cdk-bar.Bar.Initializer"></a>

```typescript
import { Bar } from 'cdk-bar'

new Bar(scope: Construct, id: string, props?: BarProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bar.Bar.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-bar.Bar.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-bar.Bar.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-bar.BarProps">BarProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-bar.Bar.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-bar.Bar.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-bar.Bar.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-bar.BarProps">BarProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-bar.Bar.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-bar.Bar.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-bar.Bar.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-bar.Bar.isConstruct"></a>

```typescript
import { Bar } from 'cdk-bar'

Bar.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-bar.Bar.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bar.Bar.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-bar.Bar.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-bar.Bar.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-bar.Bar.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


## Structs <a name="Structs" id="Structs"></a>

### BarProps <a name="BarProps" id="cdk-bar.BarProps"></a>

#### Initializer <a name="Initializer" id="cdk-bar.BarProps.Initializer"></a>

```typescript
import { BarProps } from 'cdk-bar'

const barProps: BarProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-bar.BarProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-bar.BarProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---



