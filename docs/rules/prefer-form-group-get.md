# Prefer fromGroup.get('foo') over formGroup.controls['foo'] for better (null) types.

## Fail

```ts
this.formGroup.controls['foo'].disabled

formGroup.controls['foo'].valid

myFormGroup.controls['foo'].setValue('Hello')
```

## Pass

```ts
myFormGroup.controls['foo']

this.formGroup.get('foo').disabled

formGroup.get('foo').valid

myFormGroup.get('foo').setValue()

veryFancyFrmGrpName.get('foo').setValue('Hello')
```

<!-- ## Options
### someOption
Type: `boolean`\
Default: `true`

Description
 -->

